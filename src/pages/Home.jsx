import { motion } from "framer-motion";
import About from "../components/Home/About";
import StoryQuickLinks from "../components/Home/StoryQuickLinks";
import FeaturesSection from "../components/Home/FeaturesSection";

const HomePage = () => {
  return (
    <motion.main
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      exit={{ y: 1000 }}
      transition={{ duration: 0.7 }}
    >
      <About />
      <StoryQuickLinks />
      <FeaturesSection />
    </motion.main>
  );
};

export default HomePage;
