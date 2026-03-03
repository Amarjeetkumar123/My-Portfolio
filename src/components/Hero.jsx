import { Download, MessageCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import avatar from "../assets/avatar.png";
import { profile } from "../data/portfolioData";

export default function Hero() {
  const texts = useMemo(
    () => [
      `Hi! I am ${profile.name}`,
      profile.role,
      "Building Scalable AI + Web Systems",
    ],
    []
  );

  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let typingSpeed = isDeleting ? 50 : 120;

    if (!isDeleting && index === currentText.length) {
      typingSpeed = 1500;
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return;
    }

    if (isDeleting && index === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? currentText.substring(0, index - 1)
          : currentText.substring(0, index + 1)
      );
      setIndex(isDeleting ? index - 1 : index + 1);
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, textIndex, texts]);

  return (
    <section id="hero" className="snap-start">
      <div className="relative h-screen min-h-[760px] overflow-hidden px-4 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-[580px] w-[580px] items-center justify-center sm:h-[800px] sm:w-[800px]">
            <div className="absolute h-[140px] w-[140px] rounded-full border border-white animate-ping sm:h-[200px] sm:w-[200px]" />
            <div className="absolute h-[220px] w-[220px] rounded-full border border-[#333] sm:h-[300px] sm:w-[300px]" />
            <div className="absolute h-[360px] w-[360px] rounded-full border border-[#333] sm:h-[500px] sm:w-[500px]" />
            <div className="absolute h-[470px] w-[470px] rounded-full border border-[#F7AB0A] opacity-20 animate-pulse sm:h-[650px] sm:w-[650px]" />
            <div className="absolute h-[580px] w-[580px] rounded-full border border-[#333] sm:h-[800px] sm:w-[800px]" />

            <img
              src={avatar}
              className="relative z-10 h-24 w-24 rounded-full object-cover ring-2 ring-[rgba(201,163,58,0.45)] sm:h-32 sm:w-32"
              alt="Amarjeet Kumar"
              height="200"
              width="200"
            />
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 z-20 w-full max-w-5xl -translate-x-1/2 translate-y-[var(--hero-content-offset)] px-4">
          <p className="pb-2 text-xs uppercase tracking-[0.32em] text-gray-500 md:text-sm">
            {profile.experience} · {profile.location}
          </p>
          <h1 className="mx-auto max-w-[24ch] text-3xl font-semibold leading-tight break-words md:text-5xl lg:text-6xl">
            {displayed}
            <span className="animate-blink">|</span>
          </h1>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="accent-btn min-w-44">
              <Download className="h-4 w-4" />
              View Resume
            </a>
            <a href="#contact" className="ghost-btn min-w-44">
              <MessageCircle className="h-4 w-4" />
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
