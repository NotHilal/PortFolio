import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import profile from "../data/profile";
import { EASE } from "../lib/motion";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const linkKeys = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "work", href: "#projects" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const links = linkKeys.map((link) => ({ ...link, label: t.nav[link.key] }));
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-paper/80 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_var(--color-line)]" : ""
      }`}
    >
      <nav className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <div className="flex items-center gap-3">
          <a
            href="#top"
            className="font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:text-accent"
          >
            {profile.name}
          </a>
          <ThemeToggle />
        </div>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`font-mono text-xs uppercase tracking-[0.1em] transition-colors ${
                    isActive ? "text-accent" : "text-ink-soft hover:text-accent"
                  }`}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent"
                    transition={{ duration: 0.35, ease: EASE }}
                  />
                )}
              </li>
            );
          })}
          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="flex flex-col items-end gap-1.5"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.toggleMenu}
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0, width: 22 }}
              className="h-px bg-ink"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0, width: 22 }}
              className="h-px bg-ink"
            />
          </button>
        </div>
      </nav>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-40 bg-[#0a0a0a]/60 md:hidden"
                onPointerDown={() => setOpen(false)}
              />
            )}
          </AnimatePresence>,
          document.body,
        )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="relative z-10 flex max-h-[80vh] flex-col overflow-y-auto border-t border-line bg-paper px-6 pb-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] sm:px-10 md:hidden"
          >
            <div className="flex flex-col divide-y divide-line">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="py-4 font-display text-2xl text-ink transition-colors active:text-accent"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
