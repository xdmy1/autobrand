"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/37368867750"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 transition-all duration-200 hover:scale-110 whatsapp-pulse"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" fill="white" />
    </a>
  );
}
