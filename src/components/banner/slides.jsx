import { carouselImage } from "../../assets";

export function Slide1() {
  return (
    <>
      {/* Text */}
      <div className="p-10 gap-5 h-full flex flex-col items-start justify-center">
        <h1 className="text-7xl font-bold text-text-900">
          Lessons and insights{" "}
          <span className="text-primary-500 block">from 8 years</span>
        </h1>
        <p className="text-lg text-text-900">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="bg-primary-500 text-white px-7 text-lg py-4 rounded-md">
          Register
        </button>
      </div>
      {/* Image */}
      <div className=" flex items-center h-full w-auto p-16">
        <img src={carouselImage} alt="carousel" className="w-full" />
      </div>
    </>
  );
}

export function Slide2() {
  return (
    <>
      {/* Text */}
      <div className="p-10 gap-5 h-full flex flex-col items-start justify-center">
        <h1 className="text-7xl font-bold text-text-900">
          Lessons and insights{" "}
          <span className="text-primary-500 block">from 8 years</span>
        </h1>
        <p className="text-lg text-text-900">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="bg-primary-500 text-white px-7 text-lg py-4 rounded-md">
          Register
        </button>
      </div>
      {/* Image */}
      <div className=" flex items-center h-full w-auto p-16">
        <img src={carouselImage} alt="carousel" className="w-full" />
      </div>
    </>
  );
}

export function Slide3() {
  return (
    <>
      {/* Text */}
      <div className="p-10 gap-5 h-full flex flex-col items-start justify-center">
        <h1 className="text-7xl font-bold text-text-900">
          Lessons and insights{" "}
          <span className="text-primary-500 block">from 8 years</span>
        </h1>
        <p className="text-lg text-text-900">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="bg-primary-500 text-white px-7 text-lg py-4 rounded-md">
          Register
        </button>
      </div>
      {/* Image */}
      <div className=" flex items-center h-full w-auto p-16">
        <img src={carouselImage} alt="carousel" className="w-full" />
      </div>
    </>
  );
}
