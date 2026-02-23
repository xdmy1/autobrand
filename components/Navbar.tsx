"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Acasă", href: "#acasa" },
  { label: "De ce noi", href: "#de-ce-noi" },
  { label: "Proces", href: "#cum-functioneaza" },
  { label: "Calculator", href: "#calculator" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-2 bg-[#08080A]/90 backdrop-blur-2xl border-b border-white/[0.04] shadow-2xl shadow-black/20"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Logo — actual image */}
            <a href="#acasa" className="relative z-10 flex-shrink-0">
              <Image
                src="/image.png"
                alt="AUTOBRAND"
                width={150}
                height={50}
                className="h-11 lg:h-14 w-auto drop-shadow-lg"
                style={{ filter: "drop-shadow(0 0 12px rgba(59,130,246,0.1))" }}
                priority
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-[13px] font-medium text-white/50 hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-brand-accent group-hover:w-3/4 transition-all duration-300" />
                </a>
              ))}
              <div className="w-px h-6 bg-white/10 mx-3" />
              <a
                href="tel:+37368867750"
                className="flex items-center gap-2 text-[13px] font-semibold text-brand-accent hover:text-white transition-colors duration-300"
              >
                <Phone className="w-3.5 h-3.5" />
                +373 688 67 750
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative z-10 p-2 -mr-2 text-white/70"
              aria-label="Meniu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[#0c0c0e] border-l border-white/5 lg:hidden"
            >
              <div className="flex flex-col pt-24 px-8">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="py-3 text-lg text-white/70 hover:text-white border-b border-white/[0.04] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="tel:+37368867750"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 flex items-center gap-3 text-brand-accent font-medium"
                >
                  <Phone className="w-4 h-4" />
                  +373 688 67 750
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
