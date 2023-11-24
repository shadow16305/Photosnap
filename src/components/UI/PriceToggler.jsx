import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const PriceToggler = ({ value }) => {
  const { isToggled, toggleSwitch } = value;

  return (
    <div className="flex items-center gap-8">
      <span
        className={`transition duration-200 font-bold ${
          isToggled ? "opacity-50" : ""
        }`}
      >
        Monthly
      </span>
      <button
        className={`w-[64px] h-[32px] flex items-center rounded-full px-1 py-3 ${
          isToggled ? "justify-end bg-black" : "justify-start bg-[#DFDFDF]"
        }`}
        onClick={toggleSwitch}
      >
        <motion.div
          className={`w-[24px] h-[24px] ${
            isToggled ? "bg-white" : "bg-black"
          } rounded-full`}
          layout
          transition={spring}
        />
      </button>
      <span
        className={`transition duration-200 font-bold ${
          isToggled ? "" : "opacity-50"
        }`}
      >
        Yearly
      </span>
    </div>
  );
};

export default PriceToggler;
