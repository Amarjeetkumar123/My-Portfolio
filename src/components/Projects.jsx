import { Github, Rocket } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="container-shell space-y-10">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Selected work spanning streaming platforms, e-commerce systems, and AI-powered business products.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="glass-card flex h-full flex-col overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-[var(--gold)] via-[#ffe08a] to-[var(--gold-strong)]" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-gray-300">{project.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.live} target="_blank" rel="noreferrer" className="accent-btn text-sm">
                    <Rocket size={15} />
                    Live
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer" className="ghost-btn text-sm">
                    <Github size={15} />
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
