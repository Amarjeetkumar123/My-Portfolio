import { skillGroups } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="container-shell space-y-10">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Strong across backend engineering, AI workflows, and frontend delivery.
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="glass-card p-6">
              <h3 className="text-base font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
