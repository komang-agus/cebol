import { Box, Boxes, Check } from "lucide-react";
import { useState } from "react";
import { createWhatsAppUrl, siteConfig } from "../config/siteConfig";
import { Icon } from "./Icon";

export function OrderSection({ t, language }) {
  const [selectedProduct, setSelectedProduct] = useState("single");
  const selectedWhatsappUrl = createWhatsAppUrl(language, selectedProduct);

  return (
    <>
      <section className="launch-band">
        <div>
          <p>{t.launch.overline}</p>
          <h2>{t.launch.title}</h2>
          <strong>{siteConfig.launchPeriod[language]}</strong>
        </div>
        <div className="launch-price">
          <span>{t.launch.priceLabel}</span>
          <strong>{siteConfig.price[language]}</strong>
          <small>{t.launch.note}</small>
        </div>
      </section>

      <section className="order-section section-shell" id="pesan">
        <div className="order-intro reveal">
          <p className="section-label">{t.order.label}</p>
          <h2>{t.order.title}</h2>
          <p>{t.order.body}</p>

          <div className="order-product-picker">
            <p>{t.order.selectionLabel}</p>
            <div className="order-product-options">
              {(["single", "pack"]).map((product) => {
                const option = t.order.products[product];
                const ProductIcon = product === "single" ? Box : Boxes;
                const isSelected = selectedProduct === product;

                return (
                  <button
                    className={`order-product-card ${isSelected ? "is-selected" : ""}`}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedProduct(product)}
                    key={product}
                  >
                    <ProductIcon aria-hidden="true" strokeWidth={2.1} />
                    <span>
                      <strong>{option.title}</strong>
                      <small>{option.text}</small>
                      <em>{option.price}</em>
                    </span>
                    <span className="order-product-badge">{option.badge}</span>
                    {isSelected && <Check className="order-product-check" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
          </div>

          {selectedWhatsappUrl ? (
            <a
              className="button button-primary order-cta"
              href={selectedWhatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t.order.cta}<Icon name="arrow-up-right" />
            </a>
          ) : (
            <p className="contact-unavailable">{t.order.unavailable}</p>
          )}
        </div>

        <ol className="order-steps">
          {t.order.steps.map((step, index) => (
            <li className="reveal" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
