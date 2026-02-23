"use client";

import { motion } from "framer-motion";

const partners = ["COPART", "IAAI", "MANHEIM", "KOREAN AUTO AUCTION"];

export default function Partners() {
  return (
    <section className="relative py-10 overflow-hidden">
      <div className="section-line" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-0 justify-between">
          <span className="text-xs text-white/20 uppercase tracking-[0.15em] flex-shrink-0">
            Parteneri de licitație
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {partners.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-xs sm:text-sm font-heading font-semibold tracking-[0.15em] text-white/20 hover:text-white/40 transition-colors duration-500 cursor-default"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
      <div className="section-line" />
    </section>
  );
}
