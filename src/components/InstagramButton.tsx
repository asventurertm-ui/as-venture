import { FaInstagram } from "react-icons/fa";

export default function InstagramButton() {
  return (
    <a
      href="https://www.instagram.com/as_venture_solar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50
      w-14 h-14
      rounded-full
      bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600
      flex items-center justify-center
      shadow-2xl
      hover:scale-110
      transition-all duration-300"
    >
      <FaInstagram className="text-white text-3xl" />
    </a>
  );
}