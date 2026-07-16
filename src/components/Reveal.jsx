import { motion } from "framer-motion";

// Masks a line of text and slides it up into view — used for headlines
// instead of the generic fade-up-on-scroll pattern.
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  once = true,
  className = "",
}) {
  return (
    <Tag className="overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once, amount: 0.9 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`block w-full will-change-transform ${className}`}
      >
        {children}
      </motion.span>
    </Tag>
  );
}
