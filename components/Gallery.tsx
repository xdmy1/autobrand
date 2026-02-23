"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cars = [
  {
    name: "Toyota Camry",
    year: 2022,
    flag: "🇺🇸",
    price: "de la $14,500",
    img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80",
  },
  {
    name: "Hyundai Tucson",
    year: 2023,
    flag: "🇰🇷",
    price: "de la $18,200",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
  },
  {
    name: "Tesla Model 3",
    year: 2021,
    flag: "🇺🇸",
    price: "de la $22,000",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80",
  },
  {
    name: "Kia Sportage",
    year: 2023,
    flag: "🇰🇷",
    price: "de la $16,800",
    img: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=600&q=80",
  },
  {
    name: "BMW X5",
    year: 2020,
    flag: "🇺🇸",
    price: "de la $28,500",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
  },
  {
    name: "Genesis GV70",
    year: 2022,
    flag: "🇰🇷",
    price: "de la $25,000",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
  },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <section className="py-28 lg:py-36 relative">
      <div className="section-line" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs text-brand-accent uppercase tracking-[0.2em] font-medium mb-3 block">
              Portofoliu
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight">
              Importate <span className="text-gradient">recent</span>
            </h2>
          </motion.div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-lg border border-white/[0.06] hover:border-white/15 text-white/30 hover:text-white/70 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-lg border border-white/[0.06] hover:border-white/15 text-white/30 hover:text-white/70 transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar -mx-5 px-5 snap-x snap-mandatory pb-4"
        >
          {cars.map((car, i) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex-shrink-0 w-[280px] sm:w-[300px] group snap-start"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <Image
                  src={car.img}
                  alt={car.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 text-xs font-medium text-white/60 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
                  {car.flag} {car.year}
                </div>
              </div>
              <h3 className="font-heading font-semibold text-[15px] mb-0.5">{car.name}</h3>
              <p className="text-brand-accent/80 text-sm font-medium">{car.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
