import { useEffect, useState, useRef } from "react";
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
import NavBar from "./Components/NavBar";
import { AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [DisplayNav, setDisplayNav] = useState(false);
  const [Loaded, setLoaded] = useState(false);
  const lenisRef = useRef(null);
  console.log("nav", DisplayNav);
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
    lenisRef.current = lenis;
    // Delay GSAP's ScrollTrigger refresh to ensure Lenis calculations are ready
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000); // Adjust the delay if necessary
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 3000); // 6 seconds in milliseconds

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="bg-[#ffecdd] min-h-screen">
      <AnimatePresence mode="wait">
        {!Loaded && <Loader />}

        {DisplayNav && (
          <NavBar lenis={lenisRef.current} setDisplayNav={setDisplayNav} />
        )}
      </AnimatePresence>

      <Home setDisplayNav={setDisplayNav} />
      <About />
      <AboutMe />
      <Help />
      <Projects />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
