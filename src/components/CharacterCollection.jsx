import { LockKeyhole, Sparkles } from "lucide-react";
import { characters } from "../data/characters";

export function CharacterCollection({ t, language }) {
  return (
    <section className="collection-section section-shell" id="koleksi">
      <div className="collection-header reveal">
        <div className="section-heading">
          <p className="section-label">{t.collection.label}</p>
          <h2>{t.collection.title}</h2>
        </div>
        <div>
          <p>{t.collection.body}</p>
          <span className="random-badge">{t.collection.randomBadge}</span>
        </div>
      </div>

      <div className="character-grid">
        {characters.map((character, index) => (
          <article className="character-card reveal" key={character.id}>
            <span className="character-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="character-image">
              <img src={character.image} alt={character.name} loading="lazy" />
            </div>
            <div className="character-copy">
              <h3>{character.name}</h3>
              <p>{character.description[language]}</p>
            </div>
          </article>
        ))}

        <article className="character-card character-card-secret reveal">
          <span className="character-number">05</span>
          <div className="character-image secret-character-image" aria-hidden="true">
            <Sparkles className="secret-character-spark secret-character-spark-one" />
            <Sparkles className="secret-character-spark secret-character-spark-two" />
            <span className="secret-character-silhouette" />
            <LockKeyhole className="secret-character-lock" strokeWidth={2.1} />
          </div>
          <div className="character-copy secret-character-copy">
            <span>{t.collection.secretLabel}</span>
            <h3>{t.collection.secretTitle}</h3>
            <p>{t.collection.secretDescription}</p>
          </div>
        </article>
      </div>

      <p className="concept-note reveal">* {t.collection.conceptNote}</p>
    </section>
  );
}
