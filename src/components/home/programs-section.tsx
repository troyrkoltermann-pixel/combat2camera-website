import { programs } from "@/data/home";

export function ProgramsSection() {
  return (
    <section className="programs-section" id="programs">
      <div className="section-heading">
        <p className="eyebrow">Programs</p>
        <h2>Structured around creativity, connection, and continuation.</h2>
      </div>
      <div className="program-grid">
        {programs.map((program) => (
          <article className="program-card" key={program.title}>
            <span>{program.title}</span>
            <p>{program.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
