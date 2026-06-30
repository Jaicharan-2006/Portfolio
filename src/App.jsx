import Navbar from "./components/layout/Navbar";
import ScrollProgress from "./components/layout/ScrollProgress";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import useLenis from "./hooks/useLenis";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useLenis();

  return (
    <div className="bg-[#08111f] text-white overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
  <div
    className="
      absolute
      top-20
      left-20
      w-96
      h-96
      bg-cyan-500/20
      rounded-full
      blur-[150px]
    "
  />

  <div
    className="
      absolute
      bottom-20
      right-20
      w-96
      h-96
      bg-purple-500/20
      rounded-full
      blur-[150px]
    "
  />
</div>
      <ScrollProgress />
      <Navbar />

      <Hero />
<About />
<Skills />
<Experience />
<Projects />
<Contact />
      <ToastContainer />
    </div>
  );
}

export default App;