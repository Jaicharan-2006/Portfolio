import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        rotateY: 4,
      }}
      className="
        bg-white/5
        backdrop-blur-lg
        border
        border-white/10
        rounded-3xl
        p-8
        hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]
        transition-all
        duration-500
      "
    >
      <h3 className="text-3xl font-bold mb-5">
        {project.title}
      </h3>

      <p className="text-gray-300 leading-8 mb-8">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="
              px-4
              py-2
              rounded-full
              bg-slate-800
              border
              border-cyan-500/20
            "
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-5">
        <a
          href={project.github}
          className="
            glass
            px-5
            py-3
            rounded-full
            flex
            items-center
            gap-2
          "
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href={project.demo}
          className="
            neu
            px-5
            py-3
            rounded-full
            flex
            items-center
            gap-2
          "
        >
          <FaExternalLinkAlt />
          Demo
        </a>
      </div>
    </motion.div>
  );
}