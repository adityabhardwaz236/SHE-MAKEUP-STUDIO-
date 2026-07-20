"use client";

import { FormEvent, useState } from "react";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="booking section-pad" id="booking">
      <div className="booking-copy">
        <div className="eyebrow">YOUR TIME, BEAUTIFULLY SPENT</div>
        <h2>Ready for your<br />BEAUTIFUL moment?</h2>
        <p>
          Tell us what you have in mind and your preferred date. We’ll help you
          choose the right artist, service and timing.
        </p>
        <div className="booking-details">
          <div><span>01</span><p><strong>Choose a service</strong><small>Hair, makeup, bridal or skin</small></p></div>
          <div><span>02</span><p><strong>Share your date</strong><small>We’ll check artist availability</small></p></div>
          <div><span>03</span><p><strong>We confirm</strong><small>Your appointment, thoughtfully planned</small></p></div>
        </div>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        {submitted ? (
          <div className="form-success" role="status">
            <span>✓</span>
            <h3>Thank you.</h3>
            <p>Your appointment request has been noted in this demo.</p>
            <button type="button" onClick={() => setSubmitted(false)}>MAKE ANOTHER REQUEST</button>
          </div>
        ) : (
          <>
            <label>
              <span>YOUR NAME</span>
              <input name="name" type="text" placeholder="Enter your name" required />
            </label>
            <label>
              <span>PHONE NUMBER</span>
              <input name="phone" type="tel" placeholder="Enter your number" required />
            </label>
            <div className="form-row">
              <label>
                <span>SERVICE</span>
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Select service</option>
                  <option>Hair artistry</option>
                  <option>Makeup</option>
                  <option>Bridal</option>
                  <option>Skin & rituals</option>
                </select>
              </label>
              <label>
                <span>PREFERRED DATE</span>
                <input name="date" type="date" required />
              </label>
            </div>
            <label>
              <span>YOUR MESSAGE <i>(OPTIONAL)</i></span>
              <textarea name="message" rows={3} placeholder="Tell us about your look or occasion" />
            </label>
            <button className="submit-button" type="submit">
              REQUEST APPOINTMENT <span>→</span>
            </button>
          </>
        )}
      </form>
    </section>
  );
}
