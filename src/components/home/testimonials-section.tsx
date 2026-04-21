import { testimonials } from "@/data/home";

export function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="section-heading">
        <p className="eyebrow">Participant Voices</p>
        <h2>Photography gives veterans another language for healing.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <figure className="testimonial-card" key={testimonial.name}>
            <blockquote>{testimonial.quote}</blockquote>
            <figcaption>{testimonial.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
