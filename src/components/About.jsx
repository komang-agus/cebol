import { LockKeyhole } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export function About({ t, language }) {
  return (
    <>
      <section className="about-section section-shell" id="tentang">
        <div className="section-heading reveal">
          <p className="section-label">{t.about.label}</p>
          <h2>{t.about.title}</h2>
        </div>

        <div className="about-layout">
          <div className="about-copy reveal">
            <p>{t.about.body}</p>
            <blockquote>“{t.about.quote}”</blockquote>
          </div>

          <div className="about-points">
            {t.about.points.map((point) => (
              <article className="about-point reveal" key={point.number}>
                <span>{point.number}</span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inside-section" id="isi">
        <div className="inside-visual reveal">
          <div className="package-card">
            <img
              src="/assets/packaging-front.png"
              alt={t.inside.packageAlt}
              loading="lazy"
            />
          </div>
          <p className="price-sticker">
            <small>{t.inside.priceNote}</small>
            {siteConfig.price[language]}
          </p>
        </div>

        <div className="inside-copy">
          <div className="section-heading reveal">
            <p className="section-label">{t.inside.label}</p>
            <h2>{t.inside.title}</h2>
            <p className="section-intro">{t.inside.body}</p>
          </div>

          <div className="fact-grid">
            {t.inside.facts.map((fact) => (
              <article className="fact-card reveal" key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pack-explainer" aria-labelledby="pack-explainer-title">
        <div className="pack-explainer-shell">
          <div className="pack-explainer-copy reveal">
            <p className="section-label section-label-light">{t.pack.label}</p>
            <h2 id="pack-explainer-title">{t.pack.title}</h2>
            <p>{t.pack.body}</p>
            <p className="pack-secret-note">
              <LockKeyhole className="pack-lock" aria-hidden="true" strokeWidth={2.2} />
              {t.pack.secretNote}
            </p>
          </div>

          <div className="pack-scenarios">
            <article className="pack-scenario reveal">
              <div className="pack-scenario-heading">
                <span>{t.pack.scenarioLabel} 01</span>
                <h3>{t.pack.regularTitle}</h3>
                <strong>{t.pack.regularBadge}</strong>
              </div>
              <div className="pack-slots" aria-hidden="true">
                {[1, 2, 3, 4].map((number) => (
                  <span className="pack-slot" key={number}>
                    <span className="pack-figure" />
                    <small>{String(number).padStart(2, "0")}</small>
                  </span>
                ))}
              </div>
            </article>

            <article className="pack-scenario pack-scenario-secret reveal">
              <div className="pack-scenario-heading">
                <span>{t.pack.scenarioLabel} 02</span>
                <h3>{t.pack.secretTitle}</h3>
                <strong>{t.pack.secretBadge}</strong>
              </div>
              <div className="pack-slots" aria-hidden="true">
                {[1, 2, 3].map((number) => (
                  <span className="pack-slot" key={number}>
                    <span className="pack-figure" />
                    <small>{String(number).padStart(2, "0")}</small>
                  </span>
                ))}
                <span className="pack-slot is-secret">
                  <LockKeyhole className="pack-lock" strokeWidth={2.2} />
                  <small>{t.pack.secretSlot}</small>
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
