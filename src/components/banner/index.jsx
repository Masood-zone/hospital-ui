import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Slide1, Slide2, Slide3 } from "./slides";
import { useDotButton } from "../carousel/emblaDotButton";

function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="h-auto my-2 mt-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-none flex items-center justify-between w-full min-w-0 h-[570px]">
            <Slide1 />
          </div>
          <div className="flex-none flex items-center justify-between w-full min-w-0 h-[570px]">
            <Slide2 />
          </div>
          <div className="flex-none flex items-center justify-between w-full min-w-0 h-[570px]">
            <Slide3 />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-3">
        {" "}
        {scrollSnaps.map((snap, index) => (
          <button
            key={index}
            className={`flex items-center justify-center rounded-full w-6 h-6 scale-50 ${
              index === selectedIndex ? "" : "bg-primary-300"
            } cursor-pointer`}
            onClick={() => onDotButtonClick(index)}
          >
            <span
              className={`shadow-inner w-[14px] h-[14px] rounded-full ${
                index === selectedIndex
                  ? "bg-primary-200 scale-150"
                  : "bg-primary-500"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Banner;
