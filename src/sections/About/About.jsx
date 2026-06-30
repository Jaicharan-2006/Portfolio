import { motion } from "framer-motion";
import profile from "../../assets/images/profile.webp";

export default function About() {
  return (
    <section
      id="about"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-10
      py-24
      "
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <motion.div
  animate={{
    y: [0, -15, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="glass rounded-[40px] p-5"
>
  <div
  className="
    absolute
    w-80
    h-80
    bg-cyan-500/20
    rounded-full
    blur-[120px]
    -z-10
  "
/>
            <img
              src={profile}
              alt="profile"
              className="
              w-[350px]
              rounded-[30px]
              object-cover
              "
            />
          </motion.div>

          {/* Floating Badges */}
          <div className="absolute -top-5 right-10 glass px-5 py-3 rounded-full">
            🤖 AI Developer
          </div>

          <div className="absolute bottom-5 -left-5 glass px-5 py-3 rounded-full">
            ⚡ Automation Engineer
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-cyan-400 mb-4">
            ABOUT ME
          </h4>

          <h2 className="text-5xl font-bold mb-8 leading-tight">
            Building AI That Thinks, Assists, and Evolves.
          </h2>

          <p className="text-gray-300 leading-9 text-lg mb-10">
            <p className="text-gray-300 leading-9 text-lg mb-10">
  I'm Jaicharan M, a Computer Science and Engineering student
  specializing in Artificial Intelligence, Machine Learning,
  Automation, and Full-Stack Development.

  I love building intelligent systems that combine software,
  AI, and creativity—from desktop assistants like JARVIS to
  image-generation platforms and automation tools.

  My goal is to create technology that feels futuristic,
  useful, and human-centered.
</p>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">

            <div className="neu p-8 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                10+
              </h3>

              <p>Projects Built</p>
            </div>

            <div className="
  neu
  p-8
  text-center
  hover:scale-105
  duration-300
  cursor-pointer
">
              <h3 className="text-4xl font-bold text-cyan-400">
                5+
              </h3>

              <p>Certifications</p>
            </div>

            <div className="neu p-8 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                2
              </h3>

              <p>Internships</p>
            </div>

            <div className="neu p-8 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                AI
              </h3>

              <p>Focused Career Path</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}