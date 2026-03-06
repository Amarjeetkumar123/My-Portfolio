import { BriefcaseBusiness, CalendarDays, MapPinned } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { experiences } from "../data/portfolioData";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <Motion.div
        className="container-shell space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <Motion.h2 variants={fadeUp} className="section-title">Experience</Motion.h2>
        <Motion.p variants={fadeUp} className="section-subtitle">
          Building production systems across AI calling, CRM automation, and subscription workflows.
        </Motion.p>

        <Motion.div variants={fadeUp} className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.role}`} className="glass-card border-l-[3px] border-l-[var(--gold)] p-7 md:p-8">
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

              <div className="mt-5 space-y-2.5 text-xs uppercase tracking-[0.12em] text-gray-500">
                <p className="flex items-center gap-2.5">
                  <CalendarDays size={14} />
                  {exp.duration}
                </p>
                <p className="flex items-center gap-2.5">
                  <MapPinned size={14} />
                  {exp.location}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {exp.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-7 text-gray-300 marker:text-[var(--gold)]">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </Motion.div>
      </Motion.div>
    </section>
  );
}
