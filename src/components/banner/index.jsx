import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Slide1, Slide2, Slide3 } from "./slides";
import { DotButton, useDotButton } from "../carousel/emblaDotButton";

function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="h-auto my-2">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-none flex items-center justify-between w-full min-w-0 h-[500px]">
            <Slide1 />
          </div>
          <div className="flex-none flex items-center justify-between w-full min-w-0 h-[500px]">
            <Slide2 />
          </div>
          <div className="flex-none flex items-center justify-between w-full min-w-0 h-[500px]">
            <Slide3 />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {" "}
        {scrollSnaps.map((snap, index) => (
          <button
            key={index}
            className={`flex items-center justify-center rounded-full w-auto h-auto scale-50 ${
              index === selectedIndex ? "bg-primary-500" : "bg-primary-300"
            } cursor-pointer`}
            onClick={() => onDotButtonClick(index)}
          >
            <span
              className={`shadow-inner w-[1.4rem] h-[1.4rem] rounded-full ${
                index === selectedIndex ? "bg-primary-500" : "bg-primary-200"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Banner;
