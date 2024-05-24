import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";

function Layout() {
  return (
    <main className="w-auto h-auto overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
