import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import { EASE } from "../lib/motion";
import { useLanguage } from "../i18n/LanguageContext";
import ImageLightbox from "./ImageLightbox";

export default function ProjectRow({ project, index, total }) {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
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
      transition={{ duration: 0.7, ease: EASE }}
      className={`flex flex-col gap-8 border-b border-line py-14 first:pt-0 last:border-b-0 md:flex-row md:items-center md:gap-16 ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2">
        {total && (
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        )}
        <div className="group/frame relative aspect-[16/11] overflow-hidden border border-line bg-paper-dim">
          {image ? (
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label={`${title} — enlarge image`}
              className="block h-full w-full cursor-zoom-in"
            >
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/frame:scale-105"
              />
            </button>
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
        <div className="mt-2 flex flex-wrap items-center gap-5">
          <h3 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={t.projects.liveSite}
                title={t.projects.liveSite}
                className="flex h-8 w-8 items-center justify-center border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
              >
                <ExternalLink size={15} strokeWidth={1.75} />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="flex h-8 w-8 items-center justify-center border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
              >
                <GithubIcon size={15} />
              </a>
            )}
            {!liveUrl && !githubUrl && (
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint/60">
                {t.projects.private}
              </span>
            )}
          </div>
        </div>
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
      </div>

      {image && (
        <ImageLightbox
          src={image}
          alt={title}
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </motion.div>
  );
}
