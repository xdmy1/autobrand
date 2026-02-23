import Image from "next/image";

const quickLinks = [
  { label: "Acasă", href: "#acasa" },
  { label: "De ce noi", href: "#de-ce-noi" },
  { label: "Proces", href: "#cum-functioneaza" },
  { label: "Calculator", href: "#calculator" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <Image
              src="/image.png"
              alt="AUTOBRAND"
              width={130}
              height={44}
              className="h-12 w-auto mb-4"
            />
            <p className="text-[13px] text-white/20 leading-relaxed">
              Import automobile verificate din SUA și Coreea de Sud.
              De la licitație până la înmatriculare.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-white/30 mb-4">
                Navigare
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-white/25 hover:text-white/60 transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-white/30 mb-4">
                Contact
              </h4>
              <ul className="space-y-2.5 text-sm text-white/25">
                <li>
                  <a href="tel:+37368867750" className="hover:text-white/60 transition-colors duration-300">
                    +373 688 67 750
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/autobrand.md" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors duration-300">
                    @autobrand.md
                  </a>
                </li>
                <li>Chișinău, Moldova</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-line mt-10 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/15">
            © 2025 AUTOBRAND. Toate drepturile rezervate.
          </p>
          <p className="text-[11px] text-white/10">Chișinău, Republica Moldova</p>
        </div>
      </div>
    </footer>
  );
}
