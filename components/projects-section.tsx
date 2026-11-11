import { profile, projects } from "@/data/portfolio";
import { delay } from "@/lib/motion";
import { ArrowUpRight, Spark } from "./icons";
import ProjectMedia from "./project-visuals";
import SectionHeading from "./section-heading";

const spans: Record<string, "5" | "6" | "7"> = {
  safepath: "7",
  whbs: "5",
  "animal-intrusion": "5",
  "movie-search": "7",
  chatbot: "6",
  "leave-letter": "6",
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="wrap">
        <SectionHeading num="03" label="Projects" id="projects-title">
          Problems I&apos;ve tried to <em>solve</em>, one build at a time.
        </SectionHeading>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className="project-card"
              data-span={spans[project.id] ?? "6"}
              data-reveal
              style={delay((index % 2) * 100)}
            >
              <ProjectMedia visual={project.visual} />

              <div className="project-body">
                <div className="project-meta mono">
                  <span>{project.category}</span>
                  <span className="project-meta__num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-sub">{project.subtitle}</p>
                <p className="project-desc">{project.description}</p>

                {project.badge ? (
                  <p className="badge">
                    <Spark />
                    {project.badge}
                  </p>
                ) : null}

                <ul className="tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-foot" data-reveal>
          <p>
            <span className="hero__dot" aria-hidden="true" />
            More projects and explorations are in progress.
          </p>
          <a
            href={profile.github}
            className="btn btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse GitHub
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
