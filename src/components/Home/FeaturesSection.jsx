import { featuresSection } from "../../tools/items-database";
import FeaturesCard from "../UI/FeaturesCard";

const FeaturesSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-32">
      {featuresSection.map((item) => (
        <FeaturesCard
          key={item.id}
          img={item.img}
          title={item.title}
          description={item.text}
          duration={item.duration}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
