import { programs } from "@/data/home";

export function ProgramsSection() {
  return (
    <section className="programs-section" id="programs">
      <div className="section-heading">
        <p className="eyebrow">Programs</p>
        <h2>
          Combat 2 Camera offers structured programs designed to help veterans
          rebuild focus, reduce isolation, and reconnect through photography
        </h2>
      </div>
      <div className="program-grid">
        {programs.map((program) => (
          <article className="program-card" key={program.title}>
            <p className="program-label">{program.label}</p>
            <span>{program.title}</span>
            <p>{program.description}</p>
            <div className="program-gains">
              <strong>What participants gain:</strong>
              <ul>
                {program.gains.map((gain) => (
                  <li key={gain}>{gain}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <p className="program-closing">
        Each program is designed to meet veterans where they are and provide a
        clear path forward.
      </p>
    </section>
  );
}
