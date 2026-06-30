import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaJava,
  FaGitAlt,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      {
        name: "Python",
        icon: <FaPython />,
        percentage: 90,
      },
      {
        name: "Machine Learning",
        icon: "🤖",
        percentage: 88,
      },
      {
        name: "Deep Learning",
        icon: "🧠",
        percentage: 80,
      },
      {
        name: "LLMs",
        icon: "💬",
        percentage: 85,
      },
      {
        name: "Prompt Engineering",
        icon: "✨",
        percentage: 92,
      },
      {
        name: "Computer Vision",
        icon: "👁️",
        percentage: 75,
      },
      {
        name: "Automation",
        icon: "⚙️",
        percentage: 90,
      },
    ],
  },

  {
    title: "Programming",
    skills: [
      {
        name: "Python",
        icon: <FaPython />,
        percentage: 90,
      },
      {
        name: "Java",
        icon: <FaJava />,
        percentage: 80,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        percentage: 82,
      },
      {
        name: "C",
        icon: "💻",
        percentage: 75,
      },
      {
        name: "SQL",
        icon: "🗄️",
        percentage: 80,
      },
    ],
  },

  {
    title: "Web Development",
    skills: [
      {
        name: "React",
        icon: <FaReact />,
        percentage: 85,
      },
      {
        name: "HTML",
        icon: "🌐",
        percentage: 95,
      },
      {
        name: "CSS",
        icon: "🎨",
        percentage: 90,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        percentage: 90,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        percentage: 78,
      },
      {
        name: "REST APIs",
        icon: "🔌",
        percentage: 85,
      },
    ],
  },

  {
    title: "Tools & Technologies",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
        percentage: 85,
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        percentage: 90,
      },
      {
        name: "VS Code",
        icon: "📝",
        percentage: 95,
      },
      {
        name: "Linux",
        icon: "🐧",
        percentage: 75,
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
        percentage: 75,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        percentage: 75,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-cyan-400 uppercase tracking-widest mb-3">
          Skills
        </p>

        <h2 className="text-5xl font-bold text-white mb-12">
          Technologies I Work With
        </h2>

        {/* Terminal Box */}

        <div
          className="
            bg-black/70
            rounded-3xl
            p-6
            mb-16
            border
            border-cyan-500/20
            shadow-xl
            font-mono
          "
        >
          <p className="text-green-400">
            &gt; Initializing Skill Matrix...
          </p>

          <p className="text-cyan-400 mt-2">
            &gt; AI Engineer
          </p>

          <p className="text-cyan-400">
            &gt; Full Stack Developer
          </p>

          <p className="text-cyan-400">
            &gt; Automation Specialist
          </p>

          <p className="text-green-400 mt-2">
            &gt; Status: Ready
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{
                y: -8,
              }}
              className="
                bg-white/5
                backdrop-blur-lg
                border
                border-white/10
                rounded-3xl
                p-8
                shadow-xl
              "
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-8">
                {category.title}
              </h3>

              <div className="grid gap-5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      scale: 1.03,
                      rotateX: 5,
                      rotateY: 5,
                    }}
                    className="
                      bg-slate-900/70
                      rounded-2xl
                      p-5
                      border
                      border-cyan-500/20
                      hover:border-cyan-400
                      transition-all
                      duration-500
                      hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                    "
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="
                            text-3xl
                            text-cyan-400
                            drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]
                          "
                        >
                          {skill.icon}
                        </div>

                        <span className="text-white font-medium">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-cyan-400 font-bold">
                        {skill.percentage}%
                      </span>
                    </div>

                    <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.percentage}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          ease: "easeOut",
                        }}
                        className="
                          h-3
                          rounded-full
                          bg-cyan-400
                          shadow-[0_0_20px_rgba(34,211,238,0.8)]
                        "
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}