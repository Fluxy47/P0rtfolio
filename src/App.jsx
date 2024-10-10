import { useEffect } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Help from "./Components/Help";
import AboutMe from "./Components/AboutMe";
import Lenis from "lenis";
import Projects from "./Components/Projects";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      lerp: 0.06,
      smooth: 2,
      smoothTouch: false,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      infinite: false,
      autoResize: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#ffecdd]">
      <Home />
      <About />
      <AboutMe />
      <Help />
      <Projects />
    </div>
  );
}

export default App;
