import projects from "../data/projects";
import ProjectRow from "./ProjectRow";
import ProjectCard from "./ProjectCard";
import Eyebrow from "./Eyebrow";
import { sectionIndex } from "../data/sections";

// "website" entries are shipped client work — full alternating rows.
// "app" entries are personal/academic builds — a denser grid so they
// don't compete for the same visual weight.
export default function Projects() {
  const featured = projects.filter((project) => project.type === "website");
  const more = projects.filter((project) => project.type === "app");

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl border-t border-line px-6 py-28 sm:px-10"
    >
      <div className="mb-16">
        <Eyebrow className="mb-4">
          Index / {sectionIndex("projects")} · Work
        </Eyebrow>
        <h2 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
          Selected projects
        </h2>
      </div>

      {featured.length > 0 && (
        <div className="mb-20">
          <div className="mb-8 flex items-center justify-between border-b border-line pb-4">
            <h3 className="font-display text-2xl tracking-tight text-ink">Featured work</h3>
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
              {String(featured.length).padStart(2, "0")}
            </span>
          </div>
          <div>
            {featured.map((project, i) => (
              <ProjectRow
                key={project.title}
                project={project}
                index={i}
                total={featured.length}
              />
            ))}
          </div>
        </div>
      )}

      {more.length > 0 && (
        <div>
          <div className="mb-8 flex items-center justify-between border-b border-line pb-4">
            <h3 className="font-display text-2xl tracking-tight text-ink">More projects</h3>
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
              {String(more.length).padStart(2, "0")}
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
