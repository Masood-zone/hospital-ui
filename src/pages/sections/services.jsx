import React from "react";
import {
  consultation,
  dialysisCenter,
  dietConsult,
  healthConsult,
  kidneyTransplant,
  pressureCheck,
  rehab,
  screening,
  therapy,
} from "../../assets";

function Services() {
  const community_data = [
    {
      id: 1,
      title: "Consultancy Services for All Kidney Diseases",
      description:
        "Our experienced nephrologists provide personalized treatment plans and ongoing support to ensure optimal kidney health.",
      image: consultation,
    },
    {
      id: 5,
      title: "Healthy Dietary Consult",
      description:
        "Our dietary consult services provide personalized nutrition advice to support kidney health and overall wellness.",
      image: dietConsult,
    },
    {
      id: 3,
      title: "Hypertension and Diabetic Clinic",
      description:
        "Our multidisciplinary team offers integrated care to control blood pressure and blood sugar levels effectively.",
      image: pressureCheck,
    },
    {
      id: 4,
      title: "General Medical Consultation",
      description:
        "Our experienced doctors offer thorough examinations, accurate diagnoses, and effective treatment plans for your overall well-being.",
      image: healthConsult,
    },
    {
      id: 6,
      title: "Dialysis Services",
      description:
        "Our facilities are equipped with advanced technology and staffed by skilled professionals to ensure safe and effective dialysis treatment.",
      image: dialysisCenter,
    },
    {
      id: 7,
      title: "Kidney Transplant Consultancy",
      description:
        "Our specialists provide detailed information, pre-transplant evaluations, and guidance throughout the transplant process to ensure the best outcomes.",
      image: kidneyTransplant,
    },
    {
      id: 8,
      title: "Rehabilitation Medicine Services",
      description:
        "Comprehensive rehabilitation services to help patients recover and regain function after kidney-related treatments.",
      image: therapy,
    },
    {
      id: 9,
      title: "School and Work-Based Rehabilitation",
      description:
        "We offer specialized support to ensure a smooth transition back to school or work environments.",
      image: rehab,
    },
    {
      id: 2,
      title: "Kidney Disease Prevention Clinic",
      description:
        "We offer screenings, lifestyle advice, and educational resources to promote kidney health.",
      image: screening,
    },
  ];
  return (
    <section className="h-auto flex flex-col gap-10 w-full mt-32" id="services">
      {/* Managing your community */}
      <div className="flex flex-col items-center justify-center h-auto gap-4 py-7">
        <div className="flex flex-col items-center justify-center w-full mx-auto gap-2 mb-8">
          <h2 className="text-5xl text-center font-bold text-text-800">
            Your Health is our greatest concern
          </h2>
          <p className="text-text-600 text-center">
            We offer a range of services to help you manage your kidney health
            effectively.
          </p>
        </div>
        <div className="grid mx-auto grid-cols-3 max-md:grid-cols-1  max-xl:grid-cols-2 gap-8">
          {community_data.slice(0, 6).map((community) => (
            <div
              key={community.id}
              className="card w-96 h-96 bg-base-100 shadow"
            >
              <figure className="w-full  mb-2">
                <img
                  className="w-full h-full object-cover object-center"
                  src={community.image}
                  alt={community.title}
                />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title">{community.title}</h2>
                <p>{community.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn bg-primary-500 text-white">
                    Reach out
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
