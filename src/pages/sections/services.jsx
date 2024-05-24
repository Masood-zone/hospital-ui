import React from "react";
import {
  associations,
  clubs,
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
  members,
} from "../../assets";

function Services() {
  const clients_info = [
    {
      id: 1,
      logo: company1,
    },
    {
      id: 2,
      logo: company2,
    },
    {
      id: 3,
      logo: company3,
    },
    {
      id: 4,
      logo: company4,
    },
    {
      id: 5,
      logo: company5,
    },
    {
      id: 6,
      logo: company6,
    },
    {
      id: 7,
      logo: company7,
    },
  ];

  const community_data = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments.",
      icon: members,
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments.",
      icon: associations,
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments.",
      icon: clubs,
    },
  ];
  return (
    <section className="h-auto flex flex-col gap-10 w-full" id="services">
      {/* Our Clients */}
      <div className="flex flex-col items-center justify-center h-auto  my-3 py-5 gap-4">
        <h2 className="text-3xl font-bold text-text-800">Our Clients</h2>
        <p className="text-text-600">
          We have been working with some Fortune 500+ clients.
        </p>
        <div className="grid w-full mx-auto grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[499px]:grid-cols-1 mt-4">
          {clients_info.map((client) => (
            <div className="w-20 mx-auto h-20 cursor-pointer">
              <img
                key={client.id}
                src={client.logo}
                alt="company logo"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Managing your community */}
      <div>
        <div className="flex flex-col items-center justify-center h-auto gap-4 py-7">
          <div className="flex flex-col items-center justify-center w-[490px] mx-auto gap-2">
            <h2 className="text-3xl text-center font-bold text-text-800">
              Manage your entire community in a single system
            </h2>
            <p className="text-text-600">Who is Nextcent suitable for?</p>
          </div>
          <div className="grid w-full mx-auto grid-cols-3 max-md:grid-cols-1 gap-5">
            {community_data.map((community) => (
              <div className="flex flex-col items-center justify-start w-[70%] p-5 h-auto mx-auto">
                <div className="w-[65px] h-[65px] relative">
                  <img
                    key={community.id}
                    src={community.icon}
                    alt="community icon"
                    className="w-[48px] h-[48px] z-10"
                  />
                  <div
                    className="
                     absolute w-[50px] h-[43px] -z-10 top-3 right-2 rounded-tl-2xl rounded-br-2xl bg-primary-50
                  "
                  ></div>
                </div>
                <h3 className="text-2xl w-[50%] flex items-center justify-center font-bold text-text-800 text-center">
                  {community.title}
                </h3>
                <p className="text-text-600 text-sm text-center">
                  {community.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
