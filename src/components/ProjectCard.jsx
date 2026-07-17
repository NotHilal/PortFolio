import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import { EASE } from "../lib/motion";

// Compact grid card for secondary projects — same data shape as ProjectRow,
// but denser, so the page doesn't spend a full-height row on every project.
export default function ProjectCard({ project, index }) {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.08,
        ease: EASE,
      }}
      className="group flex flex-col border border-line p-6 transition-colors duration-300 hover:border-accent/50"
    >
      {image && (
        <div className="mb-5 -mx-6 -mt-6 aspect-[16/10] overflow-hidden border-b border-line bg-paper-dim">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
          {category}
        </p>
        {year && (
          <p className="shrink-0 font-mono text-[11px] text-ink-faint">
            {year}
          </p>
        )}
      </div>

      <h4 className="mt-3 font-display text-xl tracking-tight text-ink">{title}</h4>

      {description && (
        <p className="mt-2 line-clamp-4 font-sans text-sm leading-relaxed text-ink-soft">
          {description}
        </p>
      )}

      {tags.length > 0 && (
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">
          {tags.join(" · ")}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-4 pt-1">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-accent"
          >
            Live <ExternalLink size={12} strokeWidth={1.75} />
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-accent"
          >
            <GithubIcon size={12} /> Code
          </a>
        )}
        {!liveUrl && !githubUrl && (
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint/60">
            Private project
          </span>
        )}
      </div>
    </motion.div>
  );
}
