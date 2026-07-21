import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const FLAG = { en: "🇬🇧", fr: "🇫🇷" };
const NAME = { en: "English", fr: "Français" };
const OPTIONS = ["en", "fr"];

export default function LanguageSwitcher({ className = "", onSelect }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="relative z-20 flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-accent"
      >
        <span aria-hidden="true" className="text-base leading-none">
          {FLAG[lang]}
        </span>
        <span>{lang}</span>
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              // Invisible full-screen tap-catcher — closes the dropdown on
              // any outside tap/click. Portaled to <body> because the
              // header uses backdrop-blur, which creates a new containing
              // block for position:fixed descendants — without the
              // portal this would only cover the header's own box, not
              // the full viewport.
              <div
                className="fixed inset-0 z-40"
                onPointerDown={() => setOpen(false)}
              />
            )}
          </AnimatePresence>,
          document.body,
        )}

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full z-20 mt-2 min-w-[8rem] border border-line bg-paper py-1 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
          >
            {OPTIONS.map((code) => (
              <li key={code} role="option" aria-selected={code === lang}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(code);
                    setOpen(false);
                    onSelect?.();
                  }}
                  className={`flex w-full items-center gap-2 px-3 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors hover:text-accent ${
                    code === lang ? "text-accent" : "text-ink-soft"
                  }`}
                >
                  <span aria-hidden="true" className="text-base leading-none">
                    {FLAG[code]}
                  </span>
                  {NAME[code]}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
