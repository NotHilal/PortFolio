import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../theme/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.nav.switchToLight : t.nav.switchToDark}
      title={isDark ? t.nav.switchToLight : t.nav.switchToDark}
      className={`group relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.svg
            key="sun"
            viewBox="0 0 24 24"
            fill="none"
            className="h-[15px] w-[15px]"
            aria-hidden="true"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <circle cx="12" cy="12" r="4.6" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M12 1.8v2.6" />
              <path d="M12 19.6v2.6" />
              <path d="M22.2 12h-2.6" />
              <path d="M4.4 12H1.8" />
              <path d="M19.07 4.93l-1.84 1.84" />
              <path d="M6.77 17.23l-1.84 1.84" />
              <path d="M19.07 19.07l-1.84-1.84" />
              <path d="M6.77 6.77L4.93 4.93" />
            </g>
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            viewBox="0 0 24 24"
            fill="none"
            className="h-[15px] w-[15px]"
            aria-hidden="true"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <path
              d="M20.8 14.9a9 9 0 1 1-11.7-11.7 0.9 0.9 0 0 1 1.1 1.2 7.2 7.2 0 0 0 9.4 9.4 0.9 0.9 0 0 1 1.2 1.1Z"
              fill="currentColor"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}
