import Image from "next/image";
import { impactHighlights, testimonials } from "@/data/home";

export function ImpactSection() {
  return (
    <section className="impact-section" id="impact">
      <div className="impact-intro">
        <div className="section-heading">
          <h2>Impact so far</h2>
          <p>
            Combat 2 Camera is currently in its pre-launch phase, already creating meaningful
            change through early workshops and hands-on experiences. What started as a personal
            journey, and was expanded through a Hilton Thrive Sabbatical, has grown into a proven
            model to help veterans reconnect, rebuild, and move forward.
          </p>
        </div>
        <figure className="impact-photo-card">
          <Image
            src="/assets/photos/C2C_Web_DTCF0035_Oct 05 2025.jpg"
            alt="A Combat 2 Camera participant reviewing photography work during a live event experience"
            width={1200}
            height={900}
          />
          <figcaption>Early workshops are already building connection through shared experiences.</figcaption>
        </figure>
      </div>

      <div className="impact-highlights">
        <h3>Impact Highlights</h3>
        <ul>
          {impactHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="impact-testimonials">
        <div className="section-heading">
          <p className="eyebrow">Participant Voices</p>
          <h3>What veterans are saying</h3>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure className="testimonial-card" key={testimonial.name}>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="impact-closing">
        <p>
          As Combat 2 Camera moves toward its official launch following 501(c)(3) approval, the
          focus is on expanding access, increasing reach, and building a sustainable program that
          can support more veterans.
        </p>
        <p>Early support plays a critical role in helping bring this next phase to life.</p>
      </div>
    </section>
  );
}
