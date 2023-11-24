import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import InitialTransition from "../components/UI/InitialTransition";
import { AnimatePresence } from "framer-motion";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Outlet />
        <InitialTransition />
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default RootLayout;
