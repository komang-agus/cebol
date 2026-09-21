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
    </>
  );
}
