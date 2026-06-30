import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
  className="
  min-h-screen
  flex
  flex-col
  justify-center
  items-center
  text-center
  px-6
  relative
"
>
      <h1 className="text-8xl font-black mb-5">
  JAICHARAN M
</h1>

      <h2 className="text-3xl text-cyan-400 mb-6">
        <p className="max-w-4xl text-gray-300 text-lg leading-9">
  AI Developer passionate about building intelligent
  systems, automation tools, desktop assistants,
  and full-stack applications powered by modern AI.
</p>
      </h2>

      <p className="max-w-3xl text-gray-300 leading-8">
        Building intelligent software, AI applications,
        automation systems, and futuristic desktop assistants.
      </p>

      <div className="flex gap-6 mt-12">
  <button
    className="
    glass
    px-8
    py-4
    rounded-full
    hover:scale-105
    duration-300
  "
  >
    View Projects
  </button>

 <a href="/Jaicharan M.pdf" download>
  <button
    className="
      neu
      px-8
      py-4
      rounded-full
      hover:scale-105
      duration-300
    "
  >
    Download Resume
  </button>
</a>
</div>
    </section>
  );
}