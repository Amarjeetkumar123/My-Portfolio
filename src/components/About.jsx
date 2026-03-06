import { Award, Briefcase, ExternalLink, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { motion as Motion } from "framer-motion";
import avatar from "../assets/avatar.png";
import { award, education, highlights, profile } from "../data/portfolioData";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } };

export default function About() {
  return (
    <section id="about" className="section-shell !min-h-0 !pb-10">
      <Motion.div
        className="container-shell"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.12 }}
      >
        {/* Header */}
        <Motion.h2 variants={fadeUp} className="section-title">About Me</Motion.h2>
        <Motion.p variants={fadeUp} className="section-subtitle mt-4">
          Backend-first engineer with a full-stack mindset, focused on reliable systems, clear APIs, and measurable product outcomes.
        </Motion.p>

        {/* Top Row: Avatar card + Profile summary */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[320px,1fr]">
          {/* Left — Identity card */}
          <Motion.article
            variants={fadeLeft}
            className="glass-card relative overflow-hidden p-6"
          >
            {/* Decorative corner glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(201,163,58,0.18),transparent_70%)]" />

            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-[radial-gradient(circle,rgba(201,163,58,0.2),transparent_70%)] blur-md" />
                <img
                  src={avatar}
                  alt={profile.name}
                  width={120}
                  height={120}
                  loading="lazy"
                  className="relative h-[120px] w-[120px] rounded-full object-cover ring-[3px] ring-[rgba(201,163,58,0.4)] ring-offset-2 ring-offset-[var(--bg)]"
                />
              </div>

              <h3 className="mt-4 text-lg font-bold tracking-wide">{profile.name}</h3>

              <div className="mt-1.5 flex items-center gap-2">
                <Briefcase size={13} className="text-[var(--gold)]" />
                <span className="text-sm text-gray-300">{profile.role}</span>
              </div>

              <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
                <MapPin size={12} className="text-[var(--gold)]" />
                {profile.location}
              </p>

              <span className="chip mt-3">{profile.experience}</span>
            </div>

            {/* Divider */}
            <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Education */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[rgba(201,163,58,0.12)] text-[var(--gold)]">
                  <GraduationCap size={14} />
                </span>
                <span className="text-sm font-medium text-gray-200">{education.degree}</span>
              </div>
              <p className="pl-[38px] text-xs text-gray-400">{education.school}</p>
              <p className="pl-[38px] text-[0.68rem] uppercase tracking-[0.18em] text-gray-500">
                {education.duration} · {education.score}
              </p>
            </div>

            {/* Divider */}
            <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Award */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[rgba(201,163,58,0.12)] text-[var(--gold)]">
                  <Award size={14} />
                </span>
                <span className="text-sm font-medium text-gray-200">{award.name}</span>
              </div>
              <a
                href={award.link}
                target="_blank"
                rel="noreferrer"
                className="ml-[38px] inline-flex items-center gap-1.5 text-xs font-medium text-[var(--gold)] transition hover:text-[var(--gold-strong)]"
              >
                View Certificate <ExternalLink size={11} />
              </a>
            </div>
          </Motion.article>

          {/* Right — Summary + Stats */}
          <Motion.article variants={fadeRight} className="flex flex-col gap-6">
            {/* Summary card */}
            <div className="glass-card flex-1 p-6 md:p-8">
              <div className="flex items-center gap-2.5">
                <Sparkles size={18} className="text-[var(--gold)]" />
                <h3 className="text-lg font-semibold text-white">Profile</h3>
              </div>
              <p className="mt-4 text-[0.92rem] leading-7 text-gray-300">{profile.summary}</p>
              <p className="mt-3 text-[0.92rem] leading-7 text-gray-400">{profile.focus}</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {highlights.map((item, i) => (
                <Motion.div
                  key={item.label}
                  variants={fadeUp}
                  custom={i}
                  className="group relative overflow-hidden rounded-2xl border border-[rgba(201,163,58,0.16)] bg-[linear-gradient(160deg,rgba(28,30,34,0.95),rgba(17,18,22,0.96))] px-3 py-4 text-center transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(201,163,58,0.4)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
                >
                  <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(201,163,58,0.15),transparent_70%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                  <p className="text-2xl font-bold text-[var(--gold)]">{item.value}</p>
                  <p className="mt-1.5 text-[0.65rem] uppercase leading-tight tracking-[0.12em] text-gray-400">{item.label}</p>
                </Motion.div>
              ))}
            </div>
          </Motion.article>
        </div>
      </Motion.div>
    </section>
  );
}
