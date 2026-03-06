import { Github, Rocket } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { projects } from "../data/portfolioData";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <Motion.div
        className="container-shell space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <Motion.h2 variants={fadeUp} className="section-title">Projects</Motion.h2>
        <Motion.p variants={fadeUp} className="section-subtitle">
          Selected work spanning streaming platforms, e-commerce systems, and AI-powered business products.
        </Motion.p>

        <Motion.div variants={fadeUp} className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="glass-card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-[rgba(201,163,58,0.45)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.45)]">
              <div className="h-1.5 w-full bg-gradient-to-r from-[var(--gold)] via-[#ffe08a] to-[var(--gold-strong)]" />
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-gray-300">{project.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-4">
                  <a href={project.live} target="_blank" rel="noreferrer" className="accent-btn text-sm">
                    <Rocket size={15} />
                    Live
                  </a>
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noreferrer" className="ghost-btn text-sm">
                      <Github size={15} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </Motion.div>
      </Motion.div>
    </section>
  );
}
