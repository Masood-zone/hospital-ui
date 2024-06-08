import anime from "animejs";
import React from "react";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useRef } from "react";

function ServiceCard({ community, animate }) {
  const cardRef = useRef(null);
  useEffect(() => {
    if (animate) {
      anime({
        targets: cardRef.current,
        translateY: [50, 0],
        opacity: [0.6, 1],
        scale: [0.9, 1],
        duration: 900,
        easing: "easeOutQuad",
        delay: anime.stagger(100, { start: 200 }), // Delay each card slightly
      });
    }
  }, [animate]);
  return (
    <div
      ref={cardRef}
      className="card w-96 max-sm:w-auto max-sm:mx-2 h-96 bg-base-100 shadow"
      style={{ visibility: animate ? "visible" : "hidden" }}
    >
      <figure className="w-full h-44 mb-2">
        <img
          src={community.image}
          alt={community.title}
          className="w-full h-full object-cover object-center skeleton rounded-none"
          // effect="blur"
          // width="100%"
          // height="100%"
        />
        {/* <LazyLoadImage
          src={community.image}
          alt={community.title}
          className="w-full h-full object-cover object-center"
          effect="blur"
          width="100%"
          height="100%"
        /> */}
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title">{community.title}</h2>
        <p>{community.description}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-primary-500 text-white">Reach out</button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
