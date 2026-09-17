import { Box, Boxes } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { Icon } from "./Icon";

export function Hero({ t, language, whatsappUrl }) {
  return (
    <>
      <section className="hero section-shell" id="beranda">
        <div className="hero-copy">
          <div className="hero-kicker-row">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <span>{t.hero.micro}</span>
          </div>

          <h1>
            {t.hero.titleTop}
            <em>{t.hero.titleBottom}</em>
          </h1>

          <p className="hero-description">{t.hero.description}</p>

          <div className="hero-purchase" aria-label={t.hero.purchaseLabel}>
            <a className="hero-purchase-card" href="#pesan">
              <Box aria-hidden="true" strokeWidth={2.2} />
              <span>
                <strong>{t.hero.singleTitle}</strong>
                <small>{t.hero.singleText}</small>
              </span>
            </a>
            <a className="hero-purchase-card is-pack" href="#pesan">
              <Boxes aria-hidden="true" strokeWidth={2.2} />
              <span>
                <strong>{t.hero.packTitle}</strong>
                <small>{t.hero.packText}</small>
              </span>
              <em>{t.hero.packBadge}</em>
            </a>
          </div>

          <div className="hero-meta" aria-label={`${t.hero.priceLabel}, ${t.hero.launchLabel}`}>
            <span>
              <small>{t.hero.priceLabel}</small>
              {siteConfig.price[language]}
            </span>
            <span>
              <small>{t.hero.launchLabel}</small>
              {siteConfig.launchPeriod[language]}
            </span>
          </div>

          {whatsappUrl && (
            <div className="hero-buttons">
              <a
                className="button button-quiet"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.nav.whatsapp}<Icon name="arrow-up-right" />
              </a>
            </div>
          )}
        </div>

        <div className="hero-product">
          <p className="hero-scribble" aria-hidden="true">{t.hero.scribble}</p>
          <div className="product-ground" aria-hidden="true" />
          <div className="product-box" aria-hidden="true">
            <div className="product-top" />
            <div className="product-side"><span>ceBol × KAPLIK</span></div>
            <div className="product-front">
              <img src="/assets/packaging-front.png" alt="" fetchPriority="high" />
            </div>
          </div>
          <p className="mystery-sticker" aria-hidden="true">
            <strong>?</strong>
            <span>{t.hero.mystery}</span>
          </p>
          <span className="hero-alt sr-only">{t.hero.packageAlt}</span>
        </div>
      </section>

      <div className="marquee" aria-label={t.marquee.join(", ")}>
        <div className="marquee-track">
          {[0, 1].map((copyIndex) => (
            <div
              className="marquee-group"
              aria-hidden={copyIndex === 1 ? "true" : undefined}
              key={copyIndex}
            >
              {t.marquee.map((item) => (
                <span key={`${copyIndex}-${item}`}>{item}<Icon name="spark" /></span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
