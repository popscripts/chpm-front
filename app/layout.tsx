import BackToTopButton from "@/components/layout/BackToTopButton";
import FadeInProvider from "@/components/layout/FadeInProvider";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chór Politechniki Morskiej w Szczecinie",
  description: "Oficjalna strona Chóru Politechniki Morskiej w Szczecinie - jednego z najbardziej renomowanych zespołów chóralnych w Polsce, znanego z wyjątkowej jakości artystycznej i szerokiego repertuaru. Odkryj naszą historię, osiągnięcia, nadchodzące wydarzenia i współpracę z wybitnymi artystami. Dołącz do naszej muzycznej podróży i poznaj, co czyni nas wyjątkowymi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        <FadeInProvider>{children}</FadeInProvider>
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
