import { Icon } from "./Icon";

export function FAQ({ t }) {
  return (
    <section className="faq-section section-shell" id="faq">
      <div className="section-heading faq-heading reveal">
        <p className="section-label">{t.faq.label}</p>
        <h2>{t.faq.title}</h2>
      </div>

      <div className="faq-list">
        {t.faq.items.map((item, index) => (
          <details key={`faq-${index}`}>
            <summary>
              <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
              {item.q}
              <Icon name="plus" className="faq-icon" />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
