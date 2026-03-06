import { Award, GraduationCap, MapPin } from "lucide-react";
import { motion as Motion } from "framer-motion";
import avatar from "../assets/avatar.png";
import { award, education, highlights, profile } from "../data/portfolioData";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function About() {
  return (
    <section id="about" className="section-shell">
      <Motion.div
        className="container-shell space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <Motion.h2 variants={fadeUp} className="section-title">About Me</Motion.h2>
        <Motion.p variants={fadeUp} className="section-subtitle">
          Backend-first engineer with a full-stack mindset, focused on reliable systems, clear APIs, and measurable product outcomes.
        </Motion.p>

        <Motion.div variants={fadeUp} className="grid gap-6 lg:grid-cols-[1.1fr,1.5fr]">
          <article className="glass-card p-6">
            <div className="flex flex-col items-center text-center">
              <img
                src={avatar}
                alt={profile.name}
                width={160}
                height={160}
                loading="lazy"
                className="h-40 w-40 rounded-full object-cover ring-4 ring-[rgba(201,163,58,0.35)]"
              />
              <h3 className="mt-4 text-2xl font-semibold">{profile.name}</h3>
              <p className="mt-1 text-sm text-gray-300">{profile.role}</p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={15} className="text-[var(--gold)]" />
                {profile.location}
              </p>
            </div>

            <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <GraduationCap size={16} className="text-[var(--gold)]" />
                <span>{education.degree}</span>
              </div>
              <p className="pl-6 text-sm text-gray-400">{education.school}</p>
              <p className="pl-6 text-xs uppercase tracking-[0.2em] text-gray-500">
                {education.duration} · {education.score}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-gray-300">
                <Award size={16} className="text-[var(--gold)]" />
                <span>{award.name}</span>
              </div>
              <a
                href={award.link}
                target="_blank"
                rel="noreferrer"
                className="pl-6 text-sm text-[var(--gold)] transition hover:text-[var(--gold-strong)]"
              >
                View Certificate
              </a>
            </div>
          </article>

          <article className="glass-card p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white">Profile</h3>
            <p className="mt-4 leading-7 text-gray-300">{profile.summary}</p>
            <p className="mt-4 leading-7 text-gray-400">{profile.focus}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[rgba(201,163,58,0.18)] bg-[rgba(255,255,255,0.02)] px-4 py-4"
                >
                  <p className="text-xl font-semibold text-[var(--gold)]">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </article>
        </Motion.div>
      </Motion.div>
    </section>
  );
}
