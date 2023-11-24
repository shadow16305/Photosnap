import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navlinks } from "../tools/items-database";

import logo from "../assets/shared/desktop/logo.svg";
import Hamburger from "./UI/Hamburger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:flex justify-between items-center md:py-7 md:px-10 lg:px-40 relative z-50">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <ul className="list-none uppercase flex flex-col md:flex-row gap-4 lg:gap-9">
          {navlinks.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className="hover:opacity-50 transition-all duration-300 font-bold text-xs tracking-[2px]"
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="uppercase bg-black text-white px-6 py-3 hover:bg-[#DFDFDF] hover:text-black transition-all duration-300 font-bold text-xs tracking-[2px]">
          get an invite
        </button>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="md:hidden flex justify-between items-center py-3 px-6 fixed top-0 z-20 bg-white w-screen">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <Hamburger value={{ isOpen, setIsOpen }} />
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{ duration: 0.5 }}
              className="absolute top-full w-full right-1/2 translate-x-1/2 bg-white py-6"
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{ duration: 0.1 }}
                className="flex flex-col items-center"
              >
                <ul className="list-none uppercase flex flex-col md:flex-row gap-5 text-center">
                  {navlinks.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="hover:opacity-50 transition-all duration-300 font-bold text-xs tracking-[2px]"
                      >
                        {item.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <hr className="border border-black opacity-10 my-5 w-[310px]" />
                <button className="uppercase bg-black text-white w-[310px] h-[48px] hover:bg-[#DFDFDF] hover:text-black transition-all duration-300 font-bold text-xs tracking-[2px]">
                  get an invite
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
