import { Code2, FileText, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";

const navItems = ["about", "experience", "skills", "projects", "blogs", "contact"];

export default function Header() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-40 px-4 py-2">
      <div className="container-shell">
        <div className="top-nav-shell flex items-center justify-between gap-4 px-4 py-2.5 md:px-6">
          <a href="#hero" className="text-sm font-semibold tracking-[0.2em] text-white/90 uppercase">
            {profile.name}
          </a>

          <nav className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="rounded-full px-2 py-1 text-xs uppercase tracking-[0.2em] text-gray-300 transition hover:bg-white/5 hover:text-[var(--gold)]"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 text-gray-200 transition hover:bg-white/5 hover:text-[var(--gold)]"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2 text-gray-200 transition hover:bg-white/5 hover:text-[var(--gold)]"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="rounded-full p-2 text-gray-200 transition hover:bg-white/5 hover:text-[var(--gold)]"
            >
              <Code2 size={18} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              className="hidden rounded-full p-2 text-gray-200 transition hover:bg-white/5 hover:text-[var(--gold)] sm:inline-flex"
            >
              <FileText size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-full p-2 text-gray-200 transition hover:bg-white/5 hover:text-[var(--gold)]"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
