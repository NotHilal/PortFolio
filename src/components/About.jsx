import { motion } from "framer-motion";
import profile from "../data/profile";
import Eyebrow from "./Eyebrow";
import { sectionIndex } from "../data/sections";
import { EASE } from "../lib/motion";
import {
  JavaIcon,
  ReactIcon,
  CSharpIcon,
  TypeScriptIcon,
  PythonIcon,
  KubernetesIcon,
} from "./icons/TechIcons";

const coreStack = [
  { label: "Java", Icon: JavaIcon },
  { label: "React", Icon: ReactIcon },
  { label: "C#", Icon: CSharpIcon },
  { label: "TypeScript", Icon: TypeScriptIcon },
  { label: "Python", Icon: PythonIcon },
  { label: "Kubernetes", Icon: KubernetesIcon },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl border-t border-line px-6 py-28 sm:px-10"
    >
      <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <Eyebrow>Index / {sectionIndex("about")} · About</Eyebrow>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-display text-2xl leading-snug text-ink sm:text-3xl"
          >
            {profile.about}
          </motion.p>

          {profile.aboutParagraphs?.length > 0 && (
            <div className="mt-6 space-y-4">
              {profile.aboutParagraphs.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.08,
                    ease: EASE,
                  }}
                  className="max-w-2xl font-sans text-base leading-relaxed text-ink-soft"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="mt-12 border-t border-line pt-6"
          >
            <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
              <span className="h-px w-6 bg-accent" />
              Tools &amp; technologies
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {coreStack.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 text-ink-soft"
                >
                  <Icon size={17} />
                  <span className="font-mono text-xs uppercase tracking-[0.06em]">
                    {label}
                  </span>
                </span>
              ))}
            </div>
            <p className="mt-5 font-sans text-base leading-loose text-ink-soft">
              {profile.skills.join(" · ")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
