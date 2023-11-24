import { NavLink } from "react-router-dom";

import { navlinks, socialIcons } from "../tools/items-database";
import logo from "../assets/shared/desktop/logo.svg";
import arrow from "../assets/shared/desktop/arrow.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center md:items-stretch md:flex-row justify-between bg-black text-white py-6 md:py-16 md:px-5 lg:px-40">
      <div className="flex flex-col lg:flex-row lg:gap-28">
        <div className="flex flex-col justify-between">
          <img src={logo} alt="logo" className="invert" />
          <div className="flex gap-4 py-8 lg:py-0">
            {socialIcons.map((icon) => (
              <div
                key={icon.id}
                className="cursor-pointer contrast-0 saturate-200 hover:contrast-100 hover:saturate-100 transition-all duration-300"
              >
                {icon.icon}
              </div>
            ))}
          </div>
        </div>
        <ul className="list-none uppercase flex flex-col md:flex-row lg:flex-col items-center gap-5">
          {navlinks.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                onClick={scrollToTop}
                className="hover:opacity-50 transition-all duration-300 font-bold text-xs tracking-[2px]"
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-end md:justify-between mt-[119px] md:mt-0">
        <button className="font-bold tracking-[2px] text-xs md:text-sm uppercase flex items-center gap-4 hover:opacity-60 transition-all duration-200">
          get an invite <img src={arrow} className="invert" alt="" />
        </button>
        <p className="opacity-60 mt-8 md:mt-0">
          Copyright 2019. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
