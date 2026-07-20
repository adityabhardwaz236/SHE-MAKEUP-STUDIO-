export default function Story() {
  return (
    <section className="story section-pad" id="story">
      <div className="eyebrow">THE SHE MAKEUP STUDIO EXPERIENCE</div>
      <div className="story-grid">
        <div className="story-copy">
          <p className="script-line">The art of feeling like yourself</p>
          <h1>
            Beauty,
            <br />
            beautifully <em>yours.</em>
          </h1>
          <p className="lead">
            Elevated makeup, hair and beauty experiences created with calm,
            care and an eye for every detail.
          </p>
          <p>
            From an effortless everyday glow to your most memorable celebration,
            every appointment begins with listening. Our artists shape each look
            around your features, your style and the way you want to feel.
          </p>
          <a className="text-link" href="/contact#booking">
            BOOK AN APPOINTMENT <span>↗</span>
          </a>
        </div>

        <div className="story-visual">
          <div className="portrait-frame">
            <img src="/images/story-salon.png" alt="Makeup artist creating a bridal look" />
          </div>
          <div className="story-note">
            <strong>Calm. Care. Craft.</strong>
            <span>Our promise to every guest</span>
          </div>
        </div>
      </div>
    </section>
  );
}
