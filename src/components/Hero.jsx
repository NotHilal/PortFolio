import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../data/profile";
import TextLink from "./TextLink";
import Magnetic from "./Magnetic";
import DecryptText from "./DecryptText";
import Typewriter from "./Typewriter";
import NetworkField from "./NetworkField";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { EASE } from "../lib/motion";

const isFinePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(pointer: fine)").matches;

function LoadingDots({ reduceMotion }) {
  if (reduceMotion) return <span>...</span>;
  return (
    <span className="inline-flex">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            delay: i * 0.18,
            ease: "easeInOut",
          }}
        >
          .
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (stage !== 0) return;
    const t = setTimeout(() => setStage(1), reduceMotion ? 0 : 3000);
    return () => clearTimeout(t);
  }, [stage, reduceMotion]);

  // Ambient glow trails the cursor — bloom behind the terminal glass
  // instead of sitting static.
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowSpringX = useSpring(glowX, { stiffness: 40, damping: 18, mass: 0.8 });
  const glowSpringY = useSpring(glowY, { stiffness: 40, damping: 18, mass: 0.8 });
  const glowLeft = useMotionTemplate`${glowSpringX}%`;
  const glowTop = useMotionTemplate`${glowSpringY}%`;

  function handleGlowMove(e) {
    if (reduceMotion || !isFinePointer()) return;
    const rect = e.currentTarget.getBoundingClientRect();
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  function handleGlowLeave() {
    glowX.set(50);
    glowY.set(50);
  }

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-8 pt-28 sm:px-10 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-20">
        <NetworkField />
      </div>

      <div
        className="relative flex flex-1 flex-col items-center justify-center py-10"
        onMouseMove={handleGlowMove}
        onMouseLeave={handleGlowLeave}
      >
        <motion.div
          aria-hidden="true"
          style={{ left: glowLeft, top: glowTop }}
          className="pointer-events-none absolute -z-10 h-[30rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-[150px]"
        />

        {/* One big terminal window framing the whole hero — the "CLI" is
            the chrome and the boot line, not the typography inside it. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="w-[92%] max-w-[1400px] overflow-hidden border border-line bg-paper/70 backdrop-blur-md shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-center gap-2 border-b border-line px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
            <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
              hilal@portfolio — zsh
            </span>
          </div>

          <motion.div
            layout
            className="flex min-h-[68vh] flex-col items-center justify-center px-6 py-16 text-center sm:px-10"
          >
            <DecryptText
              as="p"
              text="$ ./run-portfolio.sh"
              delay={0.3}
              className="mb-8 font-mono text-[13px] text-ink-faint sm:text-sm"
            />

            <AnimatePresence mode="wait">
              {stage === 0 && (
                <motion.p
                  key="boot"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { duration: 0.3, delay: 1.2 },
                    },
                    exit: { opacity: 0, transition: { duration: 0.25 } },
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="mb-10 font-mono text-sm text-ink-faint sm:text-base"
                >
                  Server starting
                  <LoadingDots reduceMotion={reduceMotion} />
                </motion.p>
              )}
            </AnimatePresence>

            {stage === 1 ? (
              <Typewriter
                as="div"
                delay={0}
                onDone={() => setStage(2)}
                segments={[
                  { text: profile.role, className: "" },
                  { text: " · ", className: "text-accent" },
                  { text: profile.location, className: "" },
                ]}
                className="mb-10 font-mono text-sm uppercase tracking-[0.18em] text-ink-soft sm:text-base"
              />
            ) : (
              stage > 1 && (
                <div className="mb-10 font-mono text-sm uppercase tracking-[0.18em] text-ink-soft sm:text-base">
                  {profile.role}
                  <span className="text-accent"> · </span>
                  {profile.location}
                </div>
              )
            )}

            {stage >= 2 &&
              (stage === 2 ? (
                <Typewriter
                  as="p"
                  delay={0.15}
                  speed={14}
                  onDone={() => setStage(3)}
                  segments={[
                    { text: profile.taglineLead, className: "text-ink" },
                    {
                      text: ` ${profile.taglineDetail}`,
                      className: "text-ink-soft",
                    },
                  ]}
                  className="max-w-2xl font-sans text-xl leading-snug sm:text-2xl"
                />
              ) : (
                <p className="max-w-2xl font-sans text-xl leading-snug sm:text-2xl">
                  <span className="text-ink">{profile.taglineLead}</span>{" "}
                  <span className="text-ink-soft">
                    {profile.taglineDetail}
                  </span>
                </p>
              ))}

            {stage >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
              >
                <Magnetic>
                  <TextLink href="#projects">View work</TextLink>
                </Magnetic>
                <Magnetic>
                  <TextLink href="#contact">Get in touch</TextLink>
                </Magnetic>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faint">
            Scroll
          </span>
          <div className="relative h-9 w-px overflow-hidden bg-line">
            <motion.div
              className="absolute inset-x-0 top-0 h-1/2 bg-accent"
              animate={reduceMotion ? {} : { y: ["-100%", "200%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        className="flex items-center justify-between border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint"
      >
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
      </motion.div>
    </section>
  );
}
