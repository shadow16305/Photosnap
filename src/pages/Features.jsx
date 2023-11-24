import { motion } from "framer-motion";
import HomeLayout from "../components/UI/HomeLayout";
import hero from "../assets/features/desktop/hero.jpg";
import heroTablet from "../assets/features/tablet/hero.jpg";
import FeaturesLayout from "../components/Features/FeaturesLayout";
import InviteQuicklink from "../components/UI/InviteQuicklink";

const FeaturesPage = () => {
  const heroText = (
    <p>
      We make sure all of our features are designed to be loved by every
      aspiring and even professional photograpers who wanted to share their
      stories.
    </p>
  );

  return (
    <motion.main
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      exit={{ y: 1000 }}
      transition={{ duration: 0.7 }}
    >
      <HomeLayout
        id={"f"}
        imgDesktop={hero}
        imgTablet={heroTablet}
        title={"FEATURES"}
        text={heroText}
        className="bg-black text-white"
      />
      <FeaturesLayout />
      <InviteQuicklink />
    </motion.main>
  );
};

export default FeaturesPage;
