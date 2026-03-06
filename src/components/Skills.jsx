import {
  BookOpenCheck,
  Bot,
  BrainCircuit,
  Code2,
  Container,
  Database,
  FileCode2,
  FileJson,
  GitBranch,
  Paintbrush,
  PanelsTopLeft,
  RadioTower,
  Route,
  Server,
  Sparkles,
  TableProperties,
  TerminalSquare,
  Waypoints,
  Zap,
} from "lucide-react";
import { motion as Motion } from "framer-motion";
import { skills } from "../data/portfolioData";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const skillIcons = {
  BookOpenCheck,
  Bot,
  BrainCircuit,
  Code2,
  Container,
  Database,
  FileCode2,
  FileJson,
  GitBranch,
  Paintbrush,
  PanelsTopLeft,
  RadioTower,
  Route,
  Server,
  TableProperties,
  TerminalSquare,
  Waypoints,
  Zap,
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <Motion.div
        className="container-shell space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <Motion.h2 variants={fadeUp} className="section-title">Skills</Motion.h2>
        <Motion.p variants={fadeUp} className="section-subtitle">
          Core technologies I use to build, ship, and scale modern products.
        </Motion.p>

        <Motion.div variants={fadeUp} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skillIcons[skill.icon] ?? Sparkles;

            return (
              <article
                key={skill.name}
                className="group relative overflow-hidden rounded-2xl border border-[rgba(201,163,58,0.22)] bg-[linear-gradient(150deg,rgba(28,30,34,0.95),rgba(17,18,22,0.96))] p-4 shadow-[0_16px_34px_rgba(0,0,0,0.34)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(201,163,58,0.56)]"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(201,163,58,0.28),transparent_65%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-xl border border-[rgba(201,163,58,0.35)] bg-[rgba(201,163,58,0.12)] p-2.5 text-[var(--gold)]">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold tracking-[0.04em] text-white">{skill.name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-400">{skill.detail}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </Motion.div>
        <Motion.div variants={fadeUp} className="flex justify-center">
          <span className="chip">18+ tools across backend, AI, infra, and UI</span>
        </Motion.div>
      </Motion.div>
    </section>
  );
}
