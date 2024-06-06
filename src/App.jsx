import React from "react";
import { RouterProvider } from "react-router-dom";
import { rootRoutes } from "./pages";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Loader from "./components/loader";
function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoading]);
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <RouterProvider router={rootRoutes} />
      <Toaster />
    </>
  );
}

export default App;
