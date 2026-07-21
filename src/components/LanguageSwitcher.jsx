import { useLanguage } from "../i18n/LanguageContext";

const FLAG = { en: "🇬🇧", fr: "🇫🇷" };
const NAME = { en: "English", fr: "Français" };

export default function LanguageSwitcher({ className = "" }) {
  const { lang, toggleLang } = useLanguage();
  const other = lang === "en" ? "fr" : "en";

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={`Switch to ${NAME[other]}`}
      title={NAME[other]}
      className={`flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-accent ${className}`}
    >
      <span aria-hidden="true" className="text-base leading-none">
        {FLAG[other]}
      </span>
      <span>{other}</span>
    </button>
  );
}
