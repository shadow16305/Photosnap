import { quicklinks } from "../../tools/items-database";
import ImageCard from "../UI/ImageCard";

const StoryQuickLinks = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {quicklinks.map((item) => (
        <ImageCard
          key={item.id}
          img={item.img}
          title={item.title}
          author={item.author}
        />
      ))}
    </div>
  );
};

export default StoryQuickLinks;
