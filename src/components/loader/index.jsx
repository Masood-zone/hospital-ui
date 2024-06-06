import React from "react";

function Loader() {
  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center items-center h-full w-full">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary-500"></div>
      </div>
    </div>
  );
}

export default Loader;
