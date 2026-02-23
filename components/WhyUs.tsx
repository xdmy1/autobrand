"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  BadgeDollarSign,
  ShieldCheck,
  Ship,
  HeadphonesIcon,
  Search,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: Trophy,
    title: "Experiență dovedită",
    desc: "Sute de automobile importate cu succes din SUA și Coreea de Sud.",
  },
  {
    icon: BadgeDollarSign,
    title: "Prețuri avantajoase",
    desc: "Economisești până la 30% față de piața locală, cu toate taxele incluse.",
  },
  {
    icon: ShieldCheck,
    title: "Transparență totală",
    desc: "Raport VIN complet, istoric vehicul, fotografii reale de la licitație.",
  },
  {
    icon: Ship,
    title: "Livrare în 45–60 zile",
    desc: "Transport maritim și terestru organizat profesional, tracking inclus.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suport de la A la Z",
    desc: "De la alegerea mașinii până la înmatriculare — noi ne ocupăm de tot.",
  },
  {
    icon: Search,
    title: "Orice model la comandă",
    desc: "Găsim exact mașina dorită, la bugetul tău. Orice marcă, orice model.",
  },
];

function FeatureCard({ f, delay, className, children }: { f: Feature; delay: number; className?: string; children?: React.ReactNode }) {
  const Icon = f.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`glass-card glass-card-hover rounded-2xl p-7 group ${className || ""}`}
    >
      <Icon className="w-5 h-5 text-brand-accent/70 mb-5" />
      <h3 className="font-heading text-base font-semibold mb-2">{f.title}</h3>
      <p className="text-white/35 text-sm leading-relaxed">{f.desc}</p>
      {children}
    </motion.div>
  );
}

export default function WhyUs() {
  const FirstIcon = features[0].icon;

  return (
    <section id="de-ce-noi" className="py-28 lg:py-36 relative noise-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Header — left aligned, asymmetric */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs text-brand-accent uppercase tracking-[0.2em] font-medium mb-3 block">
              Avantajele noastre
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight">
              De ce lucrează lumea
              <br />
              cu <span className="text-gradient">AUTOBRAND</span>?
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/35 text-sm max-w-sm leading-relaxed lg:text-right"
          >
            Nu suntem doar intermediari. Suntem echipa care transformă visul tău
            auto în realitate — fără stres, fără surprize.
          </motion.p>
        </div>

        {/* Grid — intentionally asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-4">
          {/* Featured large card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-card glass-card-hover rounded-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/[0.04] rounded-full blur-[60px] group-hover:bg-brand-accent/[0.08] transition-all duration-700" />
            <FirstIcon className="w-7 h-7 text-brand-accent mb-6" />
            <h3 className="font-heading text-xl font-bold mb-3">{features[0].title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{features[0].desc}</p>
            <div className="mt-8 font-heading text-5xl font-extrabold text-white/[0.04]">200+</div>
          </motion.div>

          {/* Two medium cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {features.slice(1, 3).map((f, i) => (
              <FeatureCard key={f.title} f={f} delay={(i + 1) * 0.08} />
            ))}
          </div>

          {/* Three bottom cards */}
          {features.slice(3).map((f, i) => (
            <div key={f.title} className="lg:col-span-4">
              <FeatureCard f={f} delay={(i + 3) * 0.08} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
