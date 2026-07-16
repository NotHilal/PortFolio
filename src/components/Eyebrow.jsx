import { motion } from "framer-motion";

// Small mono label with a gold tick — the recurring accent mark that ties
// the section headers together.
export default function Eyebrow({ children, delay = 0, className = "" }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-ink-faint ${className}`}
    >
      <span className="h-px w-6 bg-accent" />
      {children}
    </motion.p>
  );
}
