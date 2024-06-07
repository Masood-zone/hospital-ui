import anime from "animejs";
import React from "react";
import { useEffect } from "react";
import LazyLoadImage from "../loader/lazyLoadImage";
import { useRef } from "react";

function ServiceCard({ community, animate }) {
  const cardRef = useRef(null);
  useEffect(() => {
    if (animate) {
      anime({
        targets: cardRef.current,
        scale: [0.5, 1],
        opacity: [0, 1],
        duration: 1200,
        easing: "easeOutElastic(1,.8)",
        translateY: 20,
        delay: anime.stagger(100, { direction: "reverse" }),
      });
    }
  }, [animate]);
  return (
    <div
      ref={cardRef}
      className="card w-96 max-sm:w-auto max-sm:mx-2 h-96 bg-base-100 shadow"
      style={{ visibility: animate ? "visible" : "hidden" }}
    >
      <figure className="w-full  mb-2">
        <LazyLoadImage src={community.image} alt={community.title} />
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
