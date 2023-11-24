import React from "react";
import { featuresContent } from "../../tools/items-database";
import FeaturesCard from "../UI/FeaturesCard";

const FeaturesLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-8 mx-auto lg:max-w-[1200px] py-40">
      {featuresContent.map((item) => (
        <FeaturesCard
          key={item.id}
          img={item.img}
          title={item.title}
          description={item.text}
        />
      ))}
    </div>
  );
};

export default FeaturesLayout;
