import { useEffect } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Help from "./Components/Help";
import AboutMe from "./Components/AboutMe";
import Lenis from "lenis";
import Projects from "./Components/Projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Divider from "./Components/Divider";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

gsap.registerPlugin(ScrollTrigger);

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

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#ffecdd]">
      <Loader />
      {/* <Home />
      <About />
      <AboutMe />
      <Help />
      <Projects />
      <Divider />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
