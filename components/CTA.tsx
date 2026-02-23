"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-28 lg:py-36 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-accent/[0.04] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs text-brand-accent uppercase tracking-[0.2em] font-medium mb-6 block">
            Contactează-ne
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold leading-[1.1] mb-6">
            Pregătit să-ți imporți
            <br />
            <span className="text-gradient">mașina de vis</span>?
          </h2>
          <p className="text-white/30 text-sm sm:text-base mb-12 max-w-md mx-auto">
            Consultație gratuită. Te ajutăm să găsești mașina perfectă la cel mai bun preț.
          </p>

          {/* Phone */}
          <a
            href="tel:+37368867750"
            className="inline-block text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white hover:text-gradient transition-all duration-300 mb-12"
          >
            +373 688 67 750
          </a>

          {/* Action links — not generic buttons, more editorial */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/37368867750"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              WhatsApp
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/autobrand.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.06] text-white text-sm font-medium px-7 py-3.5 rounded-xl transition-all duration-300"
            >
              Instagram
              <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
            <a
              href="https://www.tiktok.com/@autobrand.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.06] text-white text-sm font-medium px-7 py-3.5 rounded-xl transition-all duration-300"
            >
              TikTok
              <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
