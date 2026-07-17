// Actual button-styled CTA — used on project rows for the Live/GitHub
// links, where TextLink's underline style would be too quiet.
export default function Button({
  href,
  children,
  icon: Icon,
  variant = "outline",
  className = "",
}) {
  const variants = {
    solid:
      "bg-accent text-paper border border-accent hover:bg-ink hover:border-ink",
    outline: "border border-line text-ink hover:border-accent hover:text-accent",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 ${variants[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon size={14} strokeWidth={1.75} />}
    </a>
  );
}
