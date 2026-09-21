import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["home", "#beranda"],
  ["about", "#tentang"],
  ["collection", "#koleksi"],
  ["order", "#pesan"],
  ["faq", "#faq"],
];

export function Navbar({ t, language, onLanguageChange, whatsappUrl }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label={t.nav.main}>
        <a className="wordmark" href="#beranda" onClick={closeMenu} aria-label="ceBol">
          ceBol<span>!</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.menu}
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <div className="nav-panel" id="site-navigation">
          <div className="nav-links">
            {links.map(([key, href]) => (
              <a href={href} key={key} onClick={closeMenu}>
                {t.nav[key]}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <div className="language-switch" aria-label={t.nav.language}>
              {[
                ["id", "ID"],
                ["en", "EN"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  className={language === value ? "is-active" : ""}
                  onClick={() => {
                    onLanguageChange(value);
                    closeMenu();
                  }}
                  aria-pressed={language === value}
                >
                  {label}
                </button>
              ))}
            </div>

            {whatsappUrl && (
              <a
                className="nav-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.nav.whatsapp}<ArrowUpRight aria-hidden="true" strokeWidth={2.2} />
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
