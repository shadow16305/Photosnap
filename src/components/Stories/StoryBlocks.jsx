import { storiesContent } from "../../tools/items-database";
import ImageCard from "../UI/ImageCard";

const StoryBlocks = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap">
      {storiesContent.map((item) => (
        <ImageCard
          key={item.id}
          img={item.img}
          title={item.title}
          authour={item.author}
          className="md:w-1/2 lg:w-1/4"
        />
      ))}
    </div>
  );
};

export default StoryBlocks;
