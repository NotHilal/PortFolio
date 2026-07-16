import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Button from "./Button";
import Magnetic from "./Magnetic";
import { GithubIcon } from "./icons/BrandIcons";

export default function ProjectRow({ project, index }) {
  const {
    title,
    category,
    year,
    tags = [],
    description,
    image,
    liveUrl,
    githubUrl,
  } = project;
  const meta = [year, tags.length ? tags.join(", ") : null]
    .filter(Boolean)
    .join(" · ");
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col gap-8 border-b border-line py-14 first:pt-0 last:border-b-0 md:flex-row md:items-center md:gap-16 ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2">
        <div className="relative aspect-[4/3] overflow-hidden border border-line bg-paper-dim">
          {image ? (
            <img src={image} alt={title} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center px-6">
              <span className="text-center font-display text-3xl text-ink-faint">
                {title}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
          {category}
        </p>
        <h3 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
          {title}
        </h3>
        {meta && (
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
            {meta}
          </p>
        )}
        {description && (
          <p className="mt-5 max-w-md font-sans text-[15px] leading-relaxed text-ink-soft">
            {description}
          </p>
        )}

        <div className="mt-7 flex flex-wrap gap-4">
          {liveUrl && (
            <Magnetic strength={0.25}>
              <Button href={liveUrl} icon={ExternalLink} variant="solid">
                Live site
              </Button>
            </Magnetic>
          )}
          {githubUrl && (
            <Magnetic strength={0.25}>
              <Button href={githubUrl} icon={GithubIcon} variant="outline">
                GitHub
              </Button>
            </Magnetic>
          )}
          {!liveUrl && !githubUrl && (
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint/60">
              Private project
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
