import { ArrowUp } from "lucide-react";
import { Icon } from "./Icon";

export function Footer({ t, language, onLanguageChange, whatsappUrl, socialLinks }) {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a className="footer-wordmark" href="#beranda" aria-label="ceBol">
          ceBol<span>!</span>
        </a>
        <p>{t.footer.tagline}</p>
        <a href="#beranda" className="back-to-top">
          {t.footer.backToTop}
          <span className="back-to-top-icon" aria-hidden="true">
            <ArrowUp size={16} strokeWidth={2} />
          </span>
        </a>
      </div>

      <div className="footer-bottom">
        <div>
          <strong>{t.footer.collaboration}</strong>
          <span>© 2026 · {t.footer.rights}</span>
        </div>

        <div className="footer-links">
          {whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <Icon name="arrow-up-right" /></a>}
          {socialLinks.instagram && <a href={socialLinks.instagram} target="_blank" rel="noreferrer">Instagram <Icon name="arrow-up-right" /></a>}
          {socialLinks.tiktok && <a href={socialLinks.tiktok} target="_blank" rel="noreferrer">TikTok <Icon name="arrow-up-right" /></a>}
          <div className="footer-language" aria-label={t.nav.language}>
            <button className={language === "id" ? "is-active" : ""} onClick={() => onLanguageChange("id")} type="button">ID</button>
            <span>/</span>
            <button className={language === "en" ? "is-active" : ""} onClick={() => onLanguageChange("en")} type="button">EN</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
