import { ArrowUpRight } from "lucide-react";

// Typographic link with an animated underline — stands in for the
// pill-button CTA pattern everywhere in this design.
export default function TextLink({
  href,
  children,
  external = false,
  arrow = true,
  onClick,
  className = "",
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`group inline-flex items-center gap-1.5 font-mono text-[13px] uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:text-accent ${className}`}
    >
      <span className="relative pb-0.5">
        {children}
        <span className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-100 bg-ink-faint/50 transition-colors duration-300 group-hover:bg-accent" />
      </span>
      {arrow && (
        <ArrowUpRight
          size={13}
          strokeWidth={1.75}
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </a>
  );
}
