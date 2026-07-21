import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";

// Full-screen preview for a project image — opened on click, closed via
// the X, the back arrow, Escape, or a click on the backdrop.
export default function ImageLightbox({ src, alt, open, onClose }) {
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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-paper/95 p-6 backdrop-blur-md sm:p-12"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Back"
            className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent sm:left-8 sm:top-8"
          >
            <ArrowLeft size={18} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent sm:right-8 sm:top-8"
          >
            <X size={18} strokeWidth={1.75} />
          </button>

          <motion.img
            src={src}
            alt={alt}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full object-contain shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
