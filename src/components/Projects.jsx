import projects from "../data/projects";
import ProjectRow from "./ProjectRow";
import Eyebrow from "./Eyebrow";

const groups = [
  { key: "website", label: "Websites" },
  { key: "app", label: "Apps" },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl border-t border-line px-6 py-28 sm:px-10"
    >
      <div className="mb-16">
        <Eyebrow className="mb-4">Index / 03 — Work</Eyebrow>
        <h2 className="font-display text-4xl text-ink sm:text-5xl">
          Selected projects
        </h2>
      </div>

      {groups.map(({ key, label }) => {
        const items = projects.filter((project) => project.type === key);
        if (items.length === 0) return null;

        return (
          <div key={key} className="mb-20 last:mb-0">
            <div className="mb-8 flex items-center justify-between border-b border-line pb-4">
              <h3 className="font-display text-2xl text-ink">{label}</h3>
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
                {String(items.length).padStart(2, "0")}
              </span>
            </div>
            <div>
              {items.map((project, i) => (
                <ProjectRow key={project.title} project={project} index={i} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
