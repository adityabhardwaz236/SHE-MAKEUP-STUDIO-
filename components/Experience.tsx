const reviews = [
  {
    quote: "I felt completely understood. The final look was polished, effortless and still entirely me.",
    name: "Rhea",
    occasion: "Bridal client",
  },
  {
    quote: "Every detail—from the consultation to the final pin—felt calm, thoughtful and beautifully done.",
    name: "Ananya",
    occasion: "Occasion styling",
  },
  {
    quote: "The kind of salon experience you want to return to: warm, personal and quietly luxurious.",
    name: "Mira",
    occasion: "Hair & makeup",
  },
];

export default function Experience() {
  return (
    <section className="experience section-pad">
      <div className="experience-intro">
        <div className="eyebrow light">LOVED BY OUR GUESTS</div>
        <h2>Come as you are.<br />Leave feeling more <em>you.</em></h2>
      </div>
      <div className="review-grid">
        {reviews.map((review, index) => (
          <blockquote key={review.name}>
            <span className="quote-mark">“</span>
            <p>{review.quote}</p>
            <footer>
              <strong>{review.name}</strong>
              <small>{review.occasion}</small>
              <b>0{index + 1}</b>
            </footer>
          </blockquote>
        ))}
      </div>
      <div className="experience-strip" aria-label="SHE salon values">
        <span>PERSONAL CONSULTATION</span><i>✦</i>
        <span>PREMIUM PRODUCTS</span><i>✦</i>
        <span>EXPERT ARTISTS</span><i>✦</i>
        <span>CALM EXPERIENCE</span>
      </div>
    </section>
  );
}
