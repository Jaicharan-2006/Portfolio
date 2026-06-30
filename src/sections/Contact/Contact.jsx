import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sent successfully!");
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 max-w-7xl mx-auto"
    >
      <p className="text-cyan-400 uppercase tracking-widest mb-3">
        Contact
      </p>

      <h2 className="text-5xl font-bold mb-16">
        Let's Build Something Amazing
      </h2>

      <div className="grid lg:grid-cols-2 gap-12">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            bg-white/5
            backdrop-blur-lg
            border
            border-white/10
            rounded-3xl
            p-10
          "
        >
          <h3 className="text-3xl font-bold mb-8 text-cyan-400">
            Contact Information
          </h3>

          <div className="space-y-8">

            <div className="flex items-center gap-5">
              <FaEnvelope className="text-cyan-400 text-2xl" />

              <div>
                <p className="text-gray-400">Email</p>
                <p>jaicharan623@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaGithub className="text-cyan-400 text-2xl" />

              <div>
                <p className="text-gray-400">GitHub</p>
                <a
                  href="https://github.com/Jaicharan-2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  github.com/Jaicharan-2006
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaLinkedin className="text-cyan-400 text-2xl" />

              <div>
                <p className="text-gray-400">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/jaicharan-murugesan-a68803359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  linkedin.com/in/jaicharan-murugesan-a68803359
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl" />

              <div>
                <p className="text-gray-400">Location</p>
                <p>Tamil Nadu, India</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Contact Form */}

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            bg-white/5
            backdrop-blur-lg
            border
            border-white/10
            rounded-3xl
            p-10
            space-y-6
          "
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="
              w-full
              bg-slate-900
              rounded-2xl
              p-4
              outline-none
              border
              border-cyan-500/20
            "
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="
              w-full
              bg-slate-900
              rounded-2xl
              p-4
              outline-none
              border
              border-cyan-500/20
            "
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
            className="
              w-full
              bg-slate-900
              rounded-2xl
              p-4
              outline-none
              border
              border-cyan-500/20
            "
          />

          <button
            className="
              w-full
              py-4
              rounded-2xl
              bg-cyan-500
              text-black
              font-bold
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
}