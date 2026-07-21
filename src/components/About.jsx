import { motion } from "framer-motion";
import { useProfile } from "../i18n/useLocalizedData";
import { useLanguage } from "../i18n/LanguageContext";
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
  KotlinIcon,
  DockerIcon,
  GitIcon,
  SupabaseIcon,
  JavaScriptIcon,
  HTMLIcon,
  CSSIcon,
  BashIcon,
  CICDIcon,
  MySQLIcon,
  CassandraIcon,
} from "./icons/TechIcons";

const toolRows = [
  [
    { label: "Java", Icon: JavaIcon },
    { label: "C#", Icon: CSharpIcon },
    { label: "Python", Icon: PythonIcon },
    { label: "Kotlin", Icon: KotlinIcon },
    { label: "React", Icon: ReactIcon },
    { label: "TypeScript", Icon: TypeScriptIcon },
    { label: "JavaScript", Icon: JavaScriptIcon },
    { label: "HTML", Icon: HTMLIcon },
    { label: "CSS", Icon: CSSIcon },
  ],
  [
    { label: "Git", Icon: GitIcon },
    { label: "Bash", Icon: BashIcon },
    { label: "Docker", Icon: DockerIcon },
    { label: "Kubernetes", Icon: KubernetesIcon },
    { label: "CI/CD", Icon: CICDIcon },
    { label: "MySQL", Icon: MySQLIcon },
    { label: "Supabase", Icon: SupabaseIcon },
    { label: "Cassandra", Icon: CassandraIcon },
  ],
];

export default function About() {
  const profile = useProfile();
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl border-t border-line px-6 py-28 sm:px-10"
    >
      <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <Eyebrow>
          Index / {sectionIndex("about")} · {t.about.eyebrow}
        </Eyebrow>

        <div className="min-w-0">
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
            <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-ink-faint">
              <span className="h-px w-6 bg-accent" />
              {t.about.tools}
            </p>
            <div className="space-y-8">
              {toolRows.map((row, rowIndex) => (
                <div key={rowIndex} className="marquee-row">
                  <div
                    className={`marquee-track items-center gap-12 ${
                      rowIndex === 1 ? "reverse" : ""
                    }`}
                  >
                    {[...row, ...row].map(({ label, Icon }, i) => (
                      <div
                        key={`${label}-${i}`}
                        className="group flex shrink-0 flex-col items-center gap-3"
                      >
                        <Icon
                          size={34}
                          className="transition-transform duration-300 ease-out group-hover:-translate-y-1"
                        />
                        <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft transition-colors duration-300 group-hover:text-accent">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
