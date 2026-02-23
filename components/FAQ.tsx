"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Cât durează procesul de import?",
    a: "Procesul complet durează în medie 45–60 de zile din momentul achiziției la licitație. Aceasta include transportul maritim din SUA sau Coreea, vămuirea și livrarea finală la Chișinău. Vă ținem la curent cu fiecare etapă.",
  },
  {
    q: "Ce garanții oferiți pentru vehicule?",
    a: "Fiecare vehicul vine cu raport complet VIN (Carfax sau AutoCheck), istoric de service și fotografii reale de la licitație. Verificăm starea tehnică și ne asigurăm că mașina corespunde descrierii.",
  },
  {
    q: "Pot alege singur mașina de la licitație?",
    a: "Absolut! Vă oferim acces la listele de licitație și vă ajutăm să identificați cele mai bune opțiuni. Puteți alege exact lotul dorit, iar noi ne ocupăm de licitare, plată, transport și vămuire.",
  },
  {
    q: "Ce taxe vamale trebuie să plătesc?",
    a: "Taxele vamale depind de anul fabricației, capacitatea motorului și tipul de combustibil. Vehiculele electrice și hibride beneficiază de taxe reduse. Folosiți calculatorul nostru sau contactați-ne pentru un calcul exact.",
  },
  {
    q: "Oferiți finanțare sau plată în rate?",
    a: "Da, colaborăm cu instituții financiare partenere care pot oferi soluții de finanțare adaptate bugetului dumneavoastră.",
  },
  {
    q: "Ce documente primesc la predare?",
    a: "Primiți titlul de proprietate (Title), documentele de import și vămuire, raportul VIN și toate actele necesare pentru înmatricularea în Republica Moldova.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 lg:py-36">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs text-brand-accent uppercase tracking-[0.2em] font-medium mb-3 block text-center">
            FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight text-center">
            Întrebări frecvente
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`w-full flex items-start justify-between gap-4 p-5 rounded-xl text-left transition-all duration-300 ${
                    isOpen ? "bg-white/[0.03]" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <span className={`text-sm font-medium leading-relaxed transition-colors duration-300 ${isOpen ? "text-white" : "text-white/60"}`}>
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 mt-0.5">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-brand-accent" />
                    ) : (
                      <Plus className="w-4 h-4 text-white/20" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-white/30 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
