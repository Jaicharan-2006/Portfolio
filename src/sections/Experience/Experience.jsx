import { motion } from "framer-motion";
import experiences from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-6 max-w-6xl mx-auto"
    >
      <p className="text-cyan-400 uppercase tracking-widest mb-3">
        Experience
      </p>

      <h2 className="text-5xl font-bold mb-20">
        Mission Timeline
      </h2>

      <div className="relative">

        {/* Timeline Line */}

        <div
          className="
            absolute
            left-5
            top-0
            w-1
            h-full
            bg-cyan-500/30
          "
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              pl-20
              mb-16
            "
          >
            {/* Timeline Dot */}

            <div
              className="
                absolute
                left-0
                top-4
                w-10
                h-10
                rounded-full
                bg-cyan-400
                shadow-[0_0_30px_rgba(34,211,238,0.8)]
              "
            />

            {/* Card */}

            <div
              className="
                bg-white/5
                backdrop-blur-lg
                border
                border-white/10
                rounded-3xl
                p-8
                hover:scale-[1.02]
                transition-all
                duration-500
                hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]
              "
            >
              <span
                className="
                  inline-block
                  mb-4
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/20
                  text-cyan-400
                "
              >
                {exp.year}
              </span>

              <h3 className="text-2xl font-bold mb-2">
                {exp.role}
              </h3>

              <p className="text-gray-400 mb-4">
                {exp.company}
              </p>

              <p className="text-gray-300 leading-8 mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech) => (
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}