import { motion } from "framer-motion";
import experience from "../data/experience";
import Eyebrow from "./Eyebrow";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl border-t border-line px-6 py-28 sm:px-10"
    >
      <div className="mb-16">
        <Eyebrow className="mb-4">Index / 02 — Experience</Eyebrow>
        <h2 className="font-display text-4xl text-ink sm:text-5xl">
          Where I've worked
        </h2>
      </div>

      <div>
        {experience.map((item, i) => (
          <motion.div
            key={`${item.org}-${item.role}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
            className="grid gap-2 border-b border-line py-8 first:pt-0 last:border-b-0 sm:grid-cols-[1fr_3fr] sm:gap-10"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
                {item.period ?? "Ongoing"}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-ink-faint">
                {item.org}
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-ink">{item.role}</h3>
              <p className="mt-2 max-w-xl font-sans text-[15px] leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
