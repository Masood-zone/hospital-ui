import React from "react";

function Faq() {
  const faq_data = [
    {
      id: 1,
      title: "What are the common causes of kidney disease?",
      description:
        "The common causes of kidney disease include high blood pressure, diabetes, and certain medications.",
    },
    {
      id: 2,
      title: "How can I keep my kidneys healthy?",
      description:
        "To keep your kidneys healthy, you should drink plenty of water, eat a balanced diet, exercise regularly, and avoid smoking and excessive alcohol consumption.",
    },
    {
      id: 3,
      title: "What are the symptoms of kidney disease?",
      description:
        "The symptoms of kidney disease may include fatigue, swelling in the legs and ankles, changes in urine output, and high blood pressure.",
    },
    {
      id: 4,
      title: "Can kidney disease be prevented?",
      description:
        "Kidney disease can be prevented by managing underlying conditions like diabetes and high blood pressure, maintaining a healthy lifestyle, and getting regular check-ups.",
    },
  ];
  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold py-5 text-center">
        FAQ - (Frequently Asked Questions)
      </h1>
      <div className="">
        {faq_data.map((faq) => (
          <div
            key={faq.id}
            className="collapse collapse-plus shadow my-2 rounded-md"
          >
            <input
              type="radio"
              name="my-accordion-3"
              defaultChecked={faq.id === 1}
            />
            <div className="collapse-title text-xl font-medium">
              {faq.title}
            </div>
            <div className="collapse-content">{faq.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
