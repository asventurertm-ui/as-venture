import React from 'react';
import * as Icons from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
}

export default function IconRenderer({ name, className = "w-6 h-6" }: IconRendererProps) {
  // Safe lookup for Lucide icons
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    // Return a default icon (like HelpCircle) if the icon name is not found
    const DefaultIcon = Icons.HelpCircle;
    return <DefaultIcon className={className} />;
  }

  return <IconComponent className={className} />;
}
