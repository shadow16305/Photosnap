import React from "react";
import { plans } from "../../tools/items-database";

const PricingPlans = ({ value }) => {
  const { isToggled } = value;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 mt-12">
      {plans.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col items-center px-10 relative z-0 ${
            item.id === "p2"
              ? "py-[88px] bg-black text-white md:h-[470px]"
              : "py-14 bg-[#F5F5F5] text-black md:h-[407px]"
          }`}
        >
          {" "}
          {item.id === "p2" && (
            <div className="bg-gradient-to-r z-10 from-[#FFC593] via-[#BC7198] to-[#5A77FF] lg:w-[350px] h-[6px] absolute top-0"></div>
          )}
          <h1 className="text-2xl">{item.type}</h1>
          <p className="opacity-60 text-center max-w-[270px] mt-4">
            {item.description}
          </p>
          <div className="my-10 text-center">
            <span className="text-[40px] font-bold">
              $ {isToggled ? `${item.price_year}` : `${item.price_month}`}
            </span>
            <p className="opacity-60">per {isToggled ? "year" : "month"}</p>
          </div>
          <button
            className={`uppercase transition-all duration-300 font-bold text-xs tracking-[2px] px-24 py-3 ${
              item.id === "p2"
                ? "bg-white text-black hover:bg-[#DFDFDF]"
                : "bg-black text-white hover:bg-[#DFDFDF] hover:text-black"
            }`}
          >
            Pick plan
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
