import profile from "../data/profile";

export default function Footer() {
  return (
    <footer className="px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#top" className="hover:text-accent">
          Back to top
        </a>
      </div>
    </footer>
  );
}
