import { useEffect, useMemo, useState } from "react";
import { About } from "./components/About";
import { BoxSimulator } from "./components/BoxSimulator";
import { CharacterCollection } from "./components/CharacterCollection";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { OrderSection } from "./components/OrderSection";
import { createWhatsAppUrl, siteConfig } from "./config/siteConfig";
import { content } from "./data/content";

export default function App() {
  const [language, setLanguage] = useState("id");
  const t = content[language];
  const whatsappUrl = useMemo(() => createWhatsAppUrl(language), [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "id"
        ? "ceBol Blind Box - Biar Kotaknya yang Memilihmu"
        : "ceBol Blind Box - Let the Box Choose You";

    const description =
      language === "id"
        ? "Pilih blind box ceBol satuan atau paket isi 4 dari empat karakter reguler dan satu secret. Segera hadir September 2026."
        : "Choose a single ceBol blind box or a 4-pack from four regular characters and one secret. Coming September 2026.";
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [language]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">{t.skip}</a>
      <Navbar
        t={t}
        language={language}
        onLanguageChange={setLanguage}
        whatsappUrl={whatsappUrl}
      />

      <main id="main-content">
        <Hero t={t} language={language} whatsappUrl={whatsappUrl} />
        <About t={t} language={language} />
        <CharacterCollection t={t} language={language} />
        <BoxSimulator t={t} language={language} />
        <OrderSection t={t} language={language} />
        <FAQ t={t} />
      </main>

      <Footer
        t={t}
        language={language}
        onLanguageChange={setLanguage}
        whatsappUrl={whatsappUrl}
        socialLinks={{
          instagram: siteConfig.instagramUrl,
          tiktok: siteConfig.tiktokUrl,
        }}
      />
    </>
  );
}
