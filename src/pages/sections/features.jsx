import React from "react";
import {
  clubs2,
  events,
  feature1,
  people,
  payments,
  feature2,
} from "../../assets";

function Features() {
  const statistics = [
    {
      title: "2,245,341",
      position: "Members",
      icon: people,
    },
    {
      title: "48,328",
      position: "Clubs",
      icon: clubs2,
    },
    {
      title: "828,867",
      position: "Event Bookings",
      icon: events,
    },
    {
      title: "1,926,436",
      position: "Payments",
      icon: payments,
    },
  ];
  return (
    <section className="flex flex-col gap-5" id="features">
      {/* Feature 1 */}
      <div className="flex-none flex flex-row-reverse items-center justify-between w-full min-w-0 h-auto max-md:h-full gap-5 px-14">
        <div className="flex flex-col items-start justify-start gap-6 max-md:h-auto ">
          <h1 className="text-4xl font-semibold text-text-900">
            The unseen of spending three <br /> years at Pixelgrade
          </h1>
          <p className="text-sm text-text-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="bg-primary-500 text-white btn text-sm rounded-md">
            Learn More
          </button>
        </div>
        <div className="flex items-center h-full max-md:h-auto w-full">
          <img src={feature1} alt="feature-1" className="w-full h-full" />
        </div>
      </div>
      {/* Feature 2 */}
      <div className="flex-none flex items-center justify-between w-full min-w-0 h-72 max-md:h-full px-14">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="text-4xl font-semibold text-text-900">
            Helping a local{" "}
            <span className="text-primary-400 block">
              {" "}
              business reinvent itself
            </span>
          </h1>
          <p className="text-base text-text-900">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {statistics.map((statistic) => (
            <div
              key={statistic.title}
              className="flex items-center justify-start gap-5 w-64 h-auto"
            >
              <div className="w-12 h-12">
                <img
                  src={statistic.icon}
                  alt="statistic"
                  className="w-full h-full text-primary-400"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <h1 className="text-[28px] font-bold text-text-900">
                  {statistic.title}
                </h1>
                <p className="text-xs text-text-900">{statistic.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Feature 3 */}
      <div className="flex-none flex flex-row-reverse items-center justify-between w-full min-w-0 h-auto max-md:h-full gap-5">
        <div className="flex flex-col items-start justify-start w-full gap-6 max-md:h-auto">
          <h1 className="text-4xl font-semibold text-text-900">
            How to design your site footer like <br /> we did
          </h1>
          <p className="text-sm text-text-900">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="bg-primary-500 text-white btn text-sm rounded-md">
            Learn More
          </button>
        </div>
        <div className="flex items-center h-[433px] max-md:h-auto w-full">
          <img src={feature2} alt="feature-2" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}

export default Features;
