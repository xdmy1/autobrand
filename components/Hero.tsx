"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="acasa"
      className="relative min-h-screen flex items-end lg:items-center overflow-hidden noise-bg"
    >
      {/* Background image — offset to the right */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-full lg:w-[65%] h-full">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=85"
            alt="Mașină de lux"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Multi-layer gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08080A] via-[#08080A]/95 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#08080A] via-[#08080A]/70 to-[#08080A]/20 lg:via-transparent lg:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/30 to-transparent" />

      {/* Subtle accent light bleed */}
      <div className="absolute bottom-0 left-[20%] w-[500px] h-[300px] bg-brand-accent/[0.03] blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full pb-20 lg:pb-0 pt-32 lg:pt-0">
        <div className="max-w-2xl">
          {/* Location tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-white/30 text-xs uppercase tracking-[0.2em] mb-8"
          >
            <MapPin className="w-3 h-3" />
            Chișinău, Moldova
          </motion.div>

          {/* Headline — asymmetric, not centered */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-[2.5rem] sm:text-5xl lg:text-[3.75rem] xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
          >
            Mașina ta din
            <br />
            <span className="text-gradient">SUA & Coreea</span>
            <br />
            <span className="text-white/40 text-[0.6em] font-semibold">— livrată la cheie.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[15px] sm:text-base text-white/40 max-w-md mb-10 leading-relaxed"
          >
            Importăm automobile verificate de la Copart, IAAI și licitații
            coreene. Totul inclus — de la achiziție până la înmatriculare.
          </motion.p>

          {/* CTAs — stacked feel, not generic side by side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="https://wa.me/37368867750"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-semibold px-7 py-3.5 rounded-lg transition-all duration-300 accent-glow hover:scale-[1.02]"
            >
              Solicită o consultație
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#cum-functioneaza"
              className="inline-flex items-center justify-center gap-2 text-white/50 hover:text-white text-sm font-medium px-7 py-3.5 rounded-lg border border-white/[0.08] hover:border-white/15 transition-all duration-300 hover:bg-white/[0.02]"
            >
              Cum funcționează?
            </a>
          </motion.div>

          {/* Social proof — raw numbers, not fancy cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-20 flex items-center gap-8 sm:gap-12"
          >
            <div>
              <div className="text-xl sm:text-2xl font-heading font-bold tracking-tight">200+</div>
              <div className="text-[11px] text-white/25 uppercase tracking-wider mt-0.5">mașini importate</div>
            </div>
            <div className="w-px h-8 bg-white/[0.06]" />
            <div>
              <div className="text-xl sm:text-2xl font-heading font-bold tracking-tight">45–60 zile</div>
              <div className="text-[11px] text-white/25 uppercase tracking-wider mt-0.5">termen livrare</div>
            </div>
            <div className="w-px h-8 bg-white/[0.06]" />
            <div>
              <div className="text-xl sm:text-2xl font-heading font-bold tracking-tight">–30%</div>
              <div className="text-[11px] text-white/25 uppercase tracking-wider mt-0.5">vs. piața locală</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#de-ce-noi"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hover:opacity-70 transition-opacity hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </motion.div>
      </motion.a>
    </section>
  );
}
