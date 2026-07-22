import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import { useLanguage } from "../i18n/LanguageContext";

// Full project preview opened from a card in the "more projects" grid —
// shows the full image plus every bit of project info in one panel.
export default function ProjectDetailModal({ project, open, onClose }) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = "";
    };
  }, [open, onClose]);

  if (!project) return null;

  const { title, category, year, tags = [], description, image, liveUrl, githubUrl } = project;
  const meta = [year, tags.length ? tags.join(", ") : null].filter(Boolean).join(" · ");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-paper/95 p-4 backdrop-blur-md sm:p-8"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-y-auto border border-line bg-paper shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-line bg-paper text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              <X size={18} strokeWidth={1.75} />
            </button>

            {image && (
              <div className="w-full border-b border-line bg-paper-dim">
                <img
                  src={image}
                  alt={title}
                  className="max-h-[50vh] w-full object-contain"
                />
              </div>
            )}

            <div className="p-6 sm:p-10">
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
                <p className="mt-5 max-w-2xl font-sans text-[15px] leading-relaxed text-ink-soft">
                  {description}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
