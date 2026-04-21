import { impactItems } from "@/data/home";

export function ImpactSection() {
  return (
    <section className="impact-section">
      <div className="section-heading">
        <p className="eyebrow">How Support Helps</p>
        <h2>Every contribution should move a veteran closer to creative purpose.</h2>
      </div>

      <div className="impact-grid">
        {impactItems.map((item) => (
          <article className="impact-card" key={item.label}>
            <p>{item.label}</p>
            <h3>{item.title}</h3>
            <span>{item.description}</span>
          </article>
        ))}
      </div>

      <div className="partner-strip">
        <p>Partner logos and supporter acknowledgements will live here as relationships are confirmed.</p>
      </div>
    </section>
  );
}
