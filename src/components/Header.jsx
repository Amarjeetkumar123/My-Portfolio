import { useEffect, useState } from "react";
import { Code2, FileText, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";

const navItems = ["about", "experience", "skills", "projects", "blogs", "contact"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateFromHash = () => {
      const hashSection = window.location.hash.replace("#", "");
      if (navItems.includes(hashSection)) {
        setActiveSection((prev) => (prev === hashSection ? prev : hashSection));
      } else if (hashSection === "hero" || hashSection === "") {
        setActiveSection("");
      }
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);

    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const aboutSection = sections[0];
    const headerOffset = 120;
    let ticking = false;

    const updateActiveByScroll = () => {
      const scrollY = window.scrollY;

      // On hero area, keep nav unfocused.
      if (scrollY + headerOffset < aboutSection.offsetTop) {
        setActiveSection((prev) => (prev === "" ? prev : ""));
        return;
      }

      let currentSection = sections[0].id;
      for (const section of sections) {
        if (scrollY + headerOffset >= section.offsetTop) {
          currentSection = section.id;
        }
      }
      setActiveSection((prev) => (prev === currentSection ? prev : currentSection));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveByScroll();
        ticking = false;
      });
    };

    updateActiveByScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveByScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveByScroll);
    };
  }, []);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-40 px-4 py-2">
      <div className="container-shell">
        <div className="top-nav-shell flex items-center justify-between gap-4 px-4 py-2.5 md:px-6">
          <a href="#hero" className="text-sm font-semibold tracking-[0.2em] text-white/90 uppercase">
            {profile.name}
          </a>

          <nav className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item;

              return (
                <a
                  key={item}
                  href={`#${item}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setActiveSection(item)}
                  className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.2em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,163,58,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121419] ${
                    isActive
                      ? "border-[rgba(201,163,58,0.6)] bg-[rgba(201,163,58,0.2)] text-[var(--gold)] shadow-[0_0_0_1px_rgba(201,163,58,0.35),0_0_20px_rgba(201,163,58,0.35),0_10px_26px_rgba(0,0,0,0.3)]"
                      : "border-transparent text-gray-300 hover:border-[rgba(201,163,58,0.45)] hover:bg-[rgba(201,163,58,0.12)] hover:text-[var(--gold)] hover:shadow-[0_0_0_1px_rgba(201,163,58,0.25),0_0_16px_rgba(201,163,58,0.22)]"
                  }`}
                >
                  {item}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 text-gray-200 transition hover:bg-white/5 hover:text-[var(--gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,163,58,0.55)]"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2 text-gray-200 transition hover:bg-white/5 hover:text-[var(--gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,163,58,0.55)]"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="rounded-full p-2 text-gray-200 transition hover:bg-white/5 hover:text-[var(--gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,163,58,0.55)]"
            >
              <Code2 size={18} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              className="hidden rounded-full p-2 text-gray-200 transition hover:bg-white/5 hover:text-[var(--gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,163,58,0.55)] sm:inline-flex"
            >
              <FileText size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-full p-2 text-gray-200 transition hover:bg-white/5 hover:text-[var(--gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,163,58,0.55)]"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
