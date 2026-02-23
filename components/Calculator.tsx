"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator as CalcIcon, Info } from "lucide-react";
import { calculateCost, type CalcInput, type CalcResult } from "@/lib/calculator";

const years = Array.from({ length: 11 }, (_, i) => 2025 - i);
const engines = [
  { label: "1.0L (1000cc)", value: 1000 },
  { label: "1.5L (1500cc)", value: 1500 },
  { label: "2.0L (2000cc)", value: 2000 },
  { label: "2.5L (2500cc)", value: 2500 },
  { label: "3.0L (3000cc)", value: 3000 },
  { label: "3.5L+ (3500cc)", value: 3500 },
];
const fuels = [
  { label: "Benzină", value: "benzina" as const },
  { label: "Diesel", value: "diesel" as const },
  { label: "Hibrid", value: "hibrid" as const },
  { label: "Electric", value: "electric" as const },
];

function fmt(n: number) {
  return "$" + n.toLocaleString("en-US");
}

export default function Calculator() {
  const [country, setCountry] = useState<"usa" | "korea">("usa");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState(2022);
  const [engine, setEngine] = useState(2000);
  const [fuel, setFuel] = useState<CalcInput["fuelType"]>("benzina");
  const [result, setResult] = useState<CalcResult | null>(null);

  const handleCalculate = () => {
    const v = parseInt(price) || 0;
    if (v < 500) return;
    setResult(calculateCost({ country, vehiclePrice: v, year, engineCC: engine, fuelType: fuel }));
  };

  const inputCls =
    "w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3.5 text-white text-sm focus:border-brand-accent/50 focus:outline-none focus:ring-1 focus:ring-brand-accent/20 transition-all duration-300 placeholder:text-white/20";

  return (
    <section id="calculator" className="py-28 lg:py-36 relative">
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-brand-accent/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-xs text-brand-accent uppercase tracking-[0.2em] font-medium mb-3 block text-center">
              Calculator de cost
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight text-center">
              Estimează costul
              <br />
              <span className="text-gradient">importului tău</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <div className="space-y-5">
              {/* Country toggle */}
              <div>
                <label className="block text-xs text-white/30 uppercase tracking-wider mb-2.5">
                  Țara de origine
                </label>
                <div className="flex gap-2">
                  {[
                    { val: "usa" as const, label: "🇺🇸 SUA" },
                    { val: "korea" as const, label: "🇰🇷 Coreea de Sud" },
                  ].map((c) => (
                    <button
                      key={c.val}
                      onClick={() => setCountry(c.val)}
                      className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium border transition-all duration-300 ${
                        country === c.val
                          ? "bg-brand-accent/10 border-brand-accent/40 text-white"
                          : "bg-white/[0.02] border-white/[0.06] text-white/40 hover:border-white/10"
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price + Year row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/30 uppercase tracking-wider mb-2.5">
                    Preț vehicul ($)
                  </label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="ex: 15000"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/30 uppercase tracking-wider mb-2.5">
                    Anul fabricației
                  </label>
                  <select value={year} onChange={(e) => setYear(Number(e.target.value))} className={inputCls}>
                    {years.map((y) => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>

              {/* Engine + Fuel */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/30 uppercase tracking-wider mb-2.5">
                    Capacitate motor
                  </label>
                  <select value={engine} onChange={(e) => setEngine(Number(e.target.value))} className={inputCls}>
                    {engines.map((e) => <option key={e.value} value={e.value}>{e.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-white/30 uppercase tracking-wider mb-2.5">
                    Combustibil
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {fuels.map((f) => (
                      <button
                        key={f.value}
                        onClick={() => setFuel(f.value)}
                        className={`py-3 rounded-xl text-xs font-medium border transition-all duration-300 ${
                          fuel === f.value
                            ? "bg-brand-accent/10 border-brand-accent/40 text-white"
                            : "bg-white/[0.02] border-white/[0.06] text-white/40 hover:border-white/10"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCalculate}
                className="w-full flex items-center justify-center gap-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-[1.01] accent-glow mt-2"
              >
                <CalcIcon className="w-4 h-4" />
                Calculează costul estimativ
              </button>
            </div>

            {/* Result */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-8 pt-8 border-t border-white/[0.06]"
                >
                  <div className="space-y-3">
                    {[
                      { label: "Preț vehicul", val: result.vehiclePrice },
                      { label: "Taxă licitație", val: result.auctionFee },
                      { label: "Comision AUTOBRAND", val: result.commission },
                      { label: "Transport maritim", val: result.shipping },
                      { label: "Taxe vamale (estimat)", val: result.customs },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center">
                        <span className="text-sm text-white/30">{row.label}</span>
                        <span className="text-sm text-white/70 font-medium tabular-nums">{fmt(row.val)}</span>
                      </div>
                    ))}
                    <div className="section-line my-4" />
                    <div className="flex justify-between items-center">
                      <span className="font-heading font-semibold">Total estimativ</span>
                      <span className="text-2xl font-heading font-bold text-gradient">{fmt(result.total)}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <Info className="w-3.5 h-3.5 text-white/20 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-white/25 leading-relaxed">
                      Calculul este estimativ. Contactați-ne pentru o ofertă exactă și personalizată.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
