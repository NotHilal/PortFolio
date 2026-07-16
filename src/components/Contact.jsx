import { motion } from "framer-motion";
import profile from "../data/profile";
import Eyebrow from "./Eyebrow";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl border-t border-line px-6 py-28 text-center sm:px-10"
    >
      <Eyebrow className="mb-6 justify-center">
        Index / 04 — Contact
      </Eyebrow>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-sans text-base text-ink-soft"
      >
        Have a project in mind?
      </motion.p>

      <motion.a
        href={`mailto:${profile.email}`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="group mt-2 inline-block"
      >
        <span className="text-shine block font-display text-[clamp(3rem,12vw,8rem)] leading-none">
          Let's talk
        </span>
        <span className="mx-auto mt-4 block h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-32" />
      </motion.a>

      <div className="mt-20 flex flex-col gap-4 border-t border-line pt-6 font-mono text-xs uppercase tracking-[0.12em] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <span>{profile.location}</span>
        <span>{profile.email}</span>
        <div className="flex justify-center gap-6">
          {profile.socials.github && (
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              GitHub
            </a>
          )}
          {profile.socials.linkedin && (
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              LinkedIn
            </a>
          )}
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              Résumé
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
