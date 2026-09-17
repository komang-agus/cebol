import { LockKeyhole, ShoppingBag, Sparkles, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { characters } from "../data/characters";

const SECRET_CHANCE = 0.05;
const SECRET_ID = "secret";
const TOTAL_RESULTS = characters.length + 1;

export function BoxSimulator({ t, language }) {
  const [isOpening, setIsOpening] = useState(false);
  const [result, setResult] = useState(null);
  const [collectedIds, setCollectedIds] = useState([]);
  const [showCompletion, setShowCompletion] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const openBox = () => {
    if (isOpening || collectedIds.length === TOTAL_RESULTS) return;

    setIsOpening(true);
    setResult(null);
    setShowCompletion(false);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    timerRef.current = window.setTimeout(() => {
      let nextResult;

      if (Math.random() < SECRET_CHANCE) {
        nextResult = { type: "secret" };
      } else {
        const character = characters[Math.floor(Math.random() * characters.length)];
        nextResult = { type: "regular", character };
      }

      const resultId = nextResult.type === "secret" ? SECRET_ID : nextResult.character.id;
      setResult(nextResult);
      setCollectedIds((currentIds) => (
        currentIds.includes(resultId) ? currentIds : [...currentIds, resultId]
      ));
      setIsOpening(false);
    }, reducedMotion ? 120 : 950);
  };

  const selected = result?.type === "regular" ? result.character : null;
  const isSecret = result?.type === "secret";
  const isComplete = collectedIds.length === TOTAL_RESULTS;

  return (
    <section
      className={`simulator-section ${isSecret && !showCompletion ? "has-secret-result" : ""} ${isComplete ? "is-complete" : ""}`}
      id="simulator"
    >
      <div className="simulator-copy reveal">
        <p className="section-label section-label-light">{t.simulator.label}</p>
        <h2>{t.simulator.title}</h2>
        <p>{t.simulator.body}</p>
        <p className="simulator-disclaimer">* {t.simulator.disclaimer}</p>
      </div>

      <div
        className="simulator-stage reveal"
        aria-busy={isOpening}
      >
        <div
          className={`simulator-progress ${isComplete ? "is-complete" : ""}`}
          aria-label={`${t.simulator.progressA11y}: ${collectedIds.length}/${TOTAL_RESULTS}`}
        >
          <span>{t.simulator.progressLabel}</span>
          <strong>{collectedIds.length}/{TOTAL_RESULTS}</strong>
          <span className="simulator-progress-dots" aria-hidden="true">
            {Array.from({ length: TOTAL_RESULTS }, (_, index) => (
              <i className={index < collectedIds.length ? "is-collected" : ""} key={index} />
            ))}
          </span>
        </div>

        <div className="sim-box-control">
          <button
            className={`sim-box ${isOpening ? "is-shaking" : ""} ${result ? "is-open" : ""} ${isComplete ? "is-complete" : ""}`}
            type="button"
            onClick={openBox}
            disabled={isOpening || isComplete}
            aria-label={isComplete ? t.simulator.completeBoxLabel : isOpening ? t.simulator.opening : result ? t.simulator.retry : t.simulator.open}
          >
            <span className="sim-lid" aria-hidden="true"><span /></span>
            <span className="sim-body">
              <img src="/assets/packaging-front.png" alt={t.simulator.packageAlt} />
            </span>
          </button>
        </div>

        <div
          className={`result-card ${result ? "has-result" : ""} ${isSecret && !showCompletion ? "is-secret-result" : ""} ${showCompletion ? "is-complete-result" : ""} ${isComplete && !showCompletion ? "is-completion-ready" : ""}`}
          aria-live="polite"
          aria-atomic="true"
        >
          {showCompletion ? (
            <>
              <p>{t.simulator.completeEyebrow}</p>
              <span className="complete-result-icon" aria-hidden="true">
                <Sparkles />
                <Trophy strokeWidth={1.8} />
              </span>
              <h3>{t.simulator.completeTitle}</h3>
              <span>{t.simulator.completeText}</span>
              <a className="complete-buy-button" href="#pesan">
                {t.simulator.completeCta}
                <ShoppingBag aria-hidden="true" />
              </a>
            </>
          ) : (
            <>
              {isSecret ? (
                <>
                  <p>{t.simulator.secretEyebrow}</p>
                  <div className="secret-result-visual" aria-hidden="true">
                    <Sparkles className="secret-result-spark secret-result-spark-one" />
                    <LockKeyhole className="secret-result-lock" strokeWidth={1.8} />
                    <Sparkles className="secret-result-spark secret-result-spark-two" />
                  </div>
                  <h3>{t.simulator.secretTitle}</h3>
                  <span>{t.simulator.secretText}</span>
                </>
              ) : selected ? (
                <>
                  <p>{t.simulator.resultPrefix}</p>
                  <img src={selected.image} alt="" />
                  <h3>{selected.name}</h3>
                  <span>{selected.description[language]}</span>
                </>
              ) : (
                <>
                  <strong aria-hidden="true">?</strong>
                  <span>{t.simulator.before}</span>
                </>
              )}

              {isComplete && (
                <button
                  className="completion-reveal-button"
                  type="button"
                  onClick={() => setShowCompletion(true)}
                >
                  {t.simulator.completeRevealCta}
                  <Trophy aria-hidden="true" />
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
