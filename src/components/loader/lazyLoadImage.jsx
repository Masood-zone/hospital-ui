import React from "react";
import { useInView } from "react-intersection-observer";

function LazyLoadImage({ src, alt, ...props }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="w-full h-full">
      {inView ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
          {...props}
        />
      ) : (
        <div className="w-full h-32 bg-gray-200 animate-pulse"></div>
      )}
    </div>
  );
}

export default LazyLoadImage;
