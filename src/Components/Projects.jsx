import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Arrow from "./Arrow";
import Card from "./Card";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slidesPerView: 1, // Only show 1 item at a time
    centered: true, // Center the slide
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <div
        ref={sliderRef}
        className="keen-slider w-[80%] lg:w-[70%] xl:w-[60%] min-h-[200px] border-2 border-[red]">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div className="keen-slider__slide" key={index}>
              <Card />
            </div>
          ))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </div>
  );
};

export default Projects;