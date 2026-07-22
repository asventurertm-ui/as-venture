import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix: string;
  duration?: number; // duration of count animation in milliseconds
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix,
  duration = 1800,
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Trigger count-up when the element is visible in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);
      
      // Premium quadratic ease-out: starts fast, slows down at the end
      const easeProgress = percentage * (2 - percentage);
      const currentCount = Math.floor(easeProgress * target);
      
      setCount(currentCount);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums inline-block font-sans">
      <span>{count}</span>
      <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold ml-0.5 opacity-90 select-none align-baseline">{suffix}</span>
    </span>
  );
};
