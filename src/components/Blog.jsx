import { BookOpen } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { writings } from "../data/portfolioData";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Blogs() {
  return (
    <section id="blogs" className="section-shell">
      <Motion.div
        className="container-shell space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <Motion.h2 variants={fadeUp} className="section-title">Writing</Motion.h2>
        <Motion.p variants={fadeUp} className="section-subtitle">
          Technical notes I am preparing around real-time AI systems, retrieval workflows, and scalable automation.
        </Motion.p>

        <Motion.div variants={fadeUp} className="grid gap-8 md:grid-cols-3">
          {writings.map((item) => (
            <article key={item.title} className="glass-card flex h-full flex-col p-7">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(201,163,58,0.35)] bg-[rgba(201,163,58,0.12)] text-[var(--gold)]">
                <BookOpen size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-gray-300">{item.desc}</p>
              <div className="mt-6">
                <span className={`chip ${
                  item.status === "In Progress"
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                    : ""
                }`}>{item.status}</span>
              </div>
            </article>
          ))}
        </Motion.div>
      </Motion.div>
    </section>
  );
}
