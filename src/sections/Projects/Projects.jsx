import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 max-w-7xl mx-auto"
    >
      <p className="text-cyan-400 uppercase tracking-widest mb-3">
        Projects
      </p>

      <h2 className="text-5xl font-bold mb-16">
        Featured Work
      </h2>

      {/* Featured Project */}

      {featured && (
        <div className="mb-20">
          <ProjectCard project={featured} />
        </div>
      )}

      {/* Other Projects */}

      <div className="grid md:grid-cols-2 gap-8">
        {others.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}