import { BriefcaseBusiness, CalendarDays, MapPinned } from "lucide-react";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="container-shell space-y-10">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Building production systems across AI calling, CRM automation, and subscription workflows.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.role}`} className="glass-card p-6 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="chip mb-3">Professional Experience</p>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="mt-1 flex items-center gap-2 text-sm text-gray-300">
                    <BriefcaseBusiness size={15} className="text-[var(--gold)]" />
                    {exp.company}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-xs uppercase tracking-[0.12em] text-gray-500">
                <p className="flex items-center gap-2">
                  <CalendarDays size={14} />
                  {exp.duration}
                </p>
                <p className="flex items-center gap-2">
                  <MapPinned size={14} />
                  {exp.location}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-300 marker:text-[var(--gold)]">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
