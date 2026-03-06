import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 rounded-full border border-[rgba(201,163,58,0.45)] bg-[rgba(15,16,18,0.92)] p-3 text-[var(--gold)] shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-[rgba(201,163,58,0.7)] hover:shadow-[0_0_20px_rgba(201,163,58,0.3)]"
    >
      <ArrowUp size={20} />
    </button>
  );
}
