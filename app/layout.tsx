import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AUTOBRAND — Import Mașini din SUA și Coreea de Sud | Chișinău",
  description:
    "Importăm automobile verificate de la cele mai mari licitații din SUA și Coreea de Sud. Livrare rapidă și sigură direct în Chișinău, Moldova.",
  keywords: "import mașini, SUA, Coreea de Sud, Chișinău, Moldova, Copart, IAAI, auto import",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
