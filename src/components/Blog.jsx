import { BookOpen } from "lucide-react";
import { writings } from "../data/portfolioData";

export default function Blogs() {
  return (
    <section id="blogs" className="section-shell">
      <div className="container-shell space-y-10">
        <h2 className="section-title">Writing</h2>
        <p className="section-subtitle">
          Technical notes I am preparing around real-time AI systems, retrieval workflows, and scalable automation.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {writings.map((item) => (
            <article key={item.title} className="glass-card flex h-full flex-col p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(201,163,58,0.35)] bg-[rgba(201,163,58,0.12)] text-[var(--gold)]">
                <BookOpen size={18} />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-gray-300">{item.desc}</p>
              <div className="mt-5">
                <span className="chip">{item.status}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
