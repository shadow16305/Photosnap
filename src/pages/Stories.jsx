import { motion } from "framer-motion";
import StoryBlocks from "../components/Stories/StoryBlocks";
import StoryHeader from "../components/Stories/StoryHeader";

const StoriesPage = () => {
  return (
    <motion.main
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      exit={{ y: 1000 }}
      transition={{ duration: 0.7 }}
    >
      <StoryHeader />
      <StoryBlocks />
    </motion.main>
  );
};

export default StoriesPage;
