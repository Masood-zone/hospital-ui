export function Slide1() {
  return (
    <>
      {/* Text */}
      <div className="h-full tip-background-1">
        <div className="flex flex-col items-start justify-center p-5 sm:p-10 w-full h-full gap-7 backdrop-brightness-50">
          <h1 className="text-2xl sm:text-4xl font-bold text-white">
            What Do You Know{" "}
            <span className="text-primary-500 block capitalize text-5xl sm:text-7xl">
              about your Kidneys?
            </span>
          </h1>
          <p className="text-xl text-white">
            Your kidneys are vital organs that filter waste and excess fluids
            from your blood, regulate blood pressure, produce hormones, and
            balance electrolytes. Keeping them healthy is crucial for your
            overall well-being.
          </p>
          <button className="bg-primary-500 text-white px-7 text-lg py-4 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

export function Slide2() {
  return (
    <>
      {/* Text */}
      <div className="h-full tip-background-2">
        <div className="flex flex-col h-full items-start justify-center gap-7 p-5 sm:p-10 backdrop-brightness-50">
          <h1 className="text-2xl sm:text-4xl font-bold text-white">
            Get Professional{" "}
            <span className="text-primary-500 block capitalize text-5xl sm:text-7xl">
              Fitness Advice
            </span>
          </h1>
          <p className="text-xl text-white">
            Consulting with a healthcare professional about your fitness routine
            can help you tailor an exercise plan that meets your needs. Regular
            exercise can improve kidney health by maintaining a healthy weight
            and reducing blood pressure.
          </p>
          <button className="bg-primary-500 text-white px-7 text-lg py-4 rounded-md">
            Reach Out
          </button>
        </div>
      </div>
    </>
  );
}

export function Slide3() {
  return (
    <>
      {/* Text */}
      <div className="h-full tip-background-3">
        <div className="p-5 sm:p-10 h-full gap-7 flex flex-col items-start justify-center backdrop-brightness-50">
          <h1 className="text-2xl sm:text-4xl font-bold text-white">
            Monitor Your{" "}
            <span className="text-primary-500 block capitalize text-5xl sm:text-7xl">
              Blood Pressure
            </span>
          </h1>
          <p className="text-xl text-white">
            High blood pressure can damage your kidneys over time. Regularly
            check your blood pressure and maintain a healthy range through diet,
            exercise, and medication if needed. Consult with your doctor for
            personalized advice.
          </p>
          <button className="bg-primary-500 text-white px-7 text-lg py-4 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
