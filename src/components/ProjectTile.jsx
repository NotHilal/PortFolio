import { motion } from "framer-motion";
import TextLink from "./TextLink";

export default function ProjectTile({ project, index }) {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: "easeOut" }}
    >
      <div className="group relative aspect-[4/3] overflow-hidden border border-line bg-paper-dim transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_50px_-12px_rgba(201,162,75,0.35)]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center px-6">
            <span className="text-center font-display text-3xl text-ink-faint">
              {title}
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-paper via-paper/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
            {category}
          </p>
          <h3 className="mt-1 font-display text-2xl text-ink">{title}</h3>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
          {meta}
        </span>
        <div className="flex shrink-0 gap-5">
          {liveUrl && (
            <TextLink href={liveUrl} external arrow={false}>
              Live
            </TextLink>
          )}
          {githubUrl && (
            <TextLink href={githubUrl} external arrow={false}>
              Source
            </TextLink>
          )}
          {!liveUrl && !githubUrl && (
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint/60">
              Private
            </span>
          )}
        </div>
      </div>

      {description && (
        <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-ink-soft">
          {description}
        </p>
      )}
    </motion.div>
  );
}
