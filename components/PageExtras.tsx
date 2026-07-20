export function StoryDetails() {
  const values = [
    {
      number: "01",
      title: "We listen first",
      copy: "Your appointment begins with a real conversation—your routine, your references, your comfort and the feeling you want to carry home.",
    },
    {
      number: "02",
      title: "We refine, never mask",
      copy: "Our artists work with your features, texture and individuality. The result is considered, polished and recognisably you.",
    },
    {
      number: "03",
      title: "We make room for calm",
      copy: "Thoughtful timing, an unhurried chair and careful finishing touches turn a beauty service into time genuinely set aside for you.",
    },
  ];

  return (
    <section className="editorial-section section-pad">
      <div className="editorial-intro">
        <div className="eyebrow">WHY SHE</div>
        <h2>A studio built around how beauty should <em>feel.</em></h2>
        <p>
          SHE was imagined as a warmer, more personal kind of salon—where
          technique matters, but so does the experience of being understood.
        </p>
      </div>
      <div className="value-grid">
        {values.map((value) => (
          <article key={value.number}>
            <span>{value.number}</span>
            <h3>{value.title}</h3>
            <p>{value.copy}</p>
          </article>
        ))}
      </div>
      <blockquote className="editorial-quote">
        “The most beautiful result is the one that still feels entirely like you.”
      </blockquote>
    </section>
  );
}

export function ServiceJourney() {
  const steps = [
    ["01", "Consult", "We talk through your occasion, references, routine and preferred finish."],
    ["02", "Prepare", "Your hair or skin is thoughtfully prepared so the final look wears beautifully."],
    ["03", "Create", "Your artist builds the look with balance, precision and attention to every angle."],
    ["04", "Perfect", "We refine the details, share care guidance and make sure you leave feeling confident."],
  ];

  return (
    <section className="journey-section section-pad">
      <div className="journey-heading">
        <div className="eyebrow">YOUR APPOINTMENT</div>
        <h2>Considered from first conversation to final look.</h2>
        <p>
          Every service follows a calm, collaborative process so your result
          feels as good in real life as it looks in the mirror.
        </p>
      </div>
      <div className="journey-steps">
        {steps.map(([number, title, copy]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <div className="service-pairings">
        <article>
          <small>FOR CELEBRATIONS</small>
          <h3>Event-ready artistry</h3>
          <p>Hair styling, occasion makeup and finishing touches planned as one complete look.</p>
        </article>
        <article>
          <small>FOR YOUR WEDDING</small>
          <h3>The bridal journey</h3>
          <p>Consultation, trial, wedding-day planning and a look designed to photograph beautifully.</p>
        </article>
      </div>
    </section>
  );
}

export function GalleryStory() {
  return (
    <section className="gallery-story section-pad">
      <div>
        <div className="eyebrow light">BEHIND THE LOOK</div>
        <h2>Every image begins with a conversation.</h2>
      </div>
      <div className="gallery-story-copy">
        <p>
          The SHE Edit is a growing journal of bridal mornings, quiet
          transformations, polished hair and makeup created for moments that
          matter. No two faces, textures or stories are treated the same.
        </p>
        <div className="gallery-tags" aria-label="Gallery categories">
          <span>BRIDAL</span>
          <span>HAIR</span>
          <span>MAKEUP</span>
          <span>EDITORIAL</span>
        </div>
      </div>
    </section>
  );
}

export function ContactDetails() {
  const details = [
    ["STUDIO HOURS", "Monday — Sunday", "10:00 AM — 8:00 PM"],
    ["APPOINTMENTS", "Advance booking recommended", "Bridal dates are reserved early"],
    ["CONSULTATIONS", "Tell us about your occasion", "We’ll guide you to the right service"],
  ];

  return (
    <section className="contact-details section-pad">
      <div className="contact-details-heading">
        <div className="eyebrow light">PLAN YOUR VISIT</div>
        <h2>A little planning. A beautifully easy appointment.</h2>
        <p>
          Share your preferred date, service and occasion. Our team will help
          match the timing and artist to the experience you have in mind.
        </p>
      </div>
      <div className="contact-detail-grid">
        {details.map(([label, title, copy], index) => (
          <article key={label}>
            <span>0{index + 1}</span>
            <small>{label}</small>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
