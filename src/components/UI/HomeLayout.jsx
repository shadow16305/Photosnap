import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import arrow from "../../assets/shared/desktop/arrow.svg";

const variants = {
  offScreen: {
    opacity: 0,
  },
  onScreen: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const HomeLayout = (props) => {
  return (
    <div
      className={`flex flex-col-reverse md:justify-between relative 
      ${props.id === "b2" ? "md:flex-row-reverse" : "md:flex-row"} 
      ${
        props.id === "b1" || props.id === "f"
          ? "bg-black text-white mt-20 md:mt-0"
          : ""
      }
      ${props.className}
      `}
    >
      {(props.id === "b1" || props.id === "f" || props.id === "p") && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-[304px] bg-gradient-to-b from-[#FFC593] via-[#BC7198] to-[#5A77FF] hidden md:block"></div>
      )}
      <motion.div
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: true, amount: 0.4 }}
        variants={variants}
        className="flex flex-col justify-center mx-auto py-[72px] md:py-10 md:px-10 lg:px-0 lg:py-0"
      >
        <h1 className="max-w-[318px] md:max-w-[387px]">{props.title}</h1>
        <p className="max-w-[318px] md:max-w-[387px] mt-5 opacity-60">
          {props.text}
        </p>
        <Link
          to={props.path}
          className="font-bold tracking-[2px] uppercase mt-12 flex items-center gap-4 hover:opacity-60 transition-all duration-200"
        >
          {props.link}
          <img
            src={arrow}
            className={`${props.id === "b1" && "invert"}`}
            alt="arrow"
          />
        </Link>
      </motion.div>
      <img
        src={props.imgDesktop}
        className="md:hidden lg:block lg:w-3/5"
        alt={"Image" + props.id}
      />
      <img
        src={props.imgTablet}
        className={`hidden md:block lg:hidden  ${
          props.id !== "f" ? "w-2/4" : "md:w-1/3"
        }`}
        alt={"Image" + props.id}
      />
    </div>
  );
};

export default HomeLayout;
