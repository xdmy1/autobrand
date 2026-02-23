"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Search,
  Gavel,
  Ship,
  FileCheck,
  CarFront,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultație gratuită",
    desc: "Discutăm preferințele tale: marcă, model, buget, dotări dorite.",
  },
  {
    icon: Search,
    title: "Selectăm mașina",
    desc: "Căutăm pe Copart, IAAI sau licitații coreene cele mai bune opțiuni.",
  },
  {
    icon: Gavel,
    title: "Licităm pentru tine",
    desc: "Participăm la licitație și achiziționăm vehiculul la cel mai bun preț.",
  },
  {
    icon: Ship,
    title: "Transport internațional",
    desc: "Expedierea pe cale maritimă spre Europa, cu tracking în timp real.",
  },
  {
    icon: FileCheck,
    title: "Vămuire și formalități",
    desc: "Ne ocupăm de toate formalitățile vamale în Moldova.",
  },
  {
    icon: CarFront,
    title: "Primești mașina",
    desc: "Vehiculul ajunge la Chișinău, gata de înmatriculare.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cum-functioneaza" className="py-28 lg:py-36 relative">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-accent/[0.02] rounded-full blur-[120px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-xs text-brand-accent uppercase tracking-[0.2em] font-medium mb-3 block">
            Proces simplu
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight">
            6 pași până la
            <br />
            <span className="text-gradient">mașina ta nouă</span>
          </h2>
        </motion.div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 lg:gap-y-14">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07 }}
                className="relative pl-14"
              >
                {/* Step number */}
                <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                  <span className="text-sm font-heading font-bold text-brand-accent/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-5 top-12 w-px h-[calc(100%+16px)] bg-gradient-to-b from-white/[0.06] to-transparent" />
                )}

                <h3 className="font-heading text-[15px] font-semibold mb-1.5">{step.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
