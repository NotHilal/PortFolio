import { motion } from "framer-motion";
import { useExperience } from "../i18n/useLocalizedData";
import { useLanguage } from "../i18n/LanguageContext";
import Eyebrow from "./Eyebrow";
import { sectionIndex } from "../data/sections";
import { EASE } from "../lib/motion";

export default function Experience() {
  const experience = useExperience();
  const { t } = useLanguage();
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl border-t border-line px-6 py-28 sm:px-10"
    >
      <div className="mb-16">
        <Eyebrow className="mb-4">
          Index / {sectionIndex("experience")} · {t.experience.eyebrow}
        </Eyebrow>
        <h2 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
          {t.experience.heading}
        </h2>
      </div>

      <div>
        {experience.map((item, i) => (
          <motion.div
            key={`${item.org}-${item.role}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
            className="group grid gap-2 border-b border-line py-8 pl-0 transition-[padding-left] duration-300 ease-out first:pt-0 last:border-b-0 hover:pl-4 sm:grid-cols-[1fr_3fr] sm:gap-10"
          >
            <div className="flex items-start gap-4 sm:block">
              {item.logo && (
                <img
                  src={item.logo}
                  alt={`${item.org} logo`}
                  className="h-11 w-11 shrink-0 sm:mb-3"
                />
              )}
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
                  {item.period ?? t.experience.ongoing}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-ink-faint">
                  {item.org}
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
                {item.role}
              </h3>
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
