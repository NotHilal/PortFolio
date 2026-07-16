import { motion } from "framer-motion";
import profile from "../data/profile";
import Reveal from "./Reveal";
import TextLink from "./TextLink";
import Magnetic from "./Magnetic";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col justify-between px-6 pb-8 pt-28 sm:px-10 sm:pt-32"
    >
      <div className="flex items-baseline justify-between border-b border-line pb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
        <span>{profile.role}</span>
        <span className="hidden sm:inline">{profile.location}</span>
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center py-16 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]"
        />

        <Reveal
          as="h1"
          className="text-center font-display text-[clamp(2.75rem,12vw,9.5rem)] font-bold uppercase leading-[0.9] tracking-tight"
        >
          <span className="text-shine">{profile.name}</span>
        </Reveal>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="mt-8 max-w-lg font-sans text-lg leading-relaxed text-ink-soft"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          <Magnetic>
            <TextLink href="#projects">View work</TextLink>
          </Magnetic>
          <Magnetic>
            <TextLink href="#contact">Get in touch</TextLink>
          </Magnetic>
        </motion.div>
      </div>

      <div className="flex items-center justify-between border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
        <a href={`mailto:${profile.email}`} className="hover:text-accent">
          {profile.email}
        </a>
        <div className="flex items-center gap-4">
          {profile.socials.github && (
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink-faint transition-colors hover:text-accent"
            >
              <GithubIcon size={15} />
            </a>
          )}
          {profile.socials.linkedin && (
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink-faint transition-colors hover:text-accent"
            >
              <LinkedinIcon size={15} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
