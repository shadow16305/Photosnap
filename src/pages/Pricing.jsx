import { useState } from "react";
import { motion } from "framer-motion";

import HomeLayout from "../components/UI/HomeLayout";
import PriceToggler from "../components/UI/PriceToggler";
import hero from "../assets/pricing/desktop/hero.jpg";
import heroTablet from "../assets/pricing/tablet/hero.jpg";
import PricingPlans from "../components/Pricing/PricingPlans";
import PricingTable from "../components/Pricing/PricingTable";
import InviteQuicklink from "../components/UI/InviteQuicklink";

const PricingPage = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => setIsToggled(!isToggled);

  const heroTextPricing = (
    <p>
      Create a your stories, Photosnap is a platform for photographers and
      visual storytellers. It’s the simple way to create and share your photos.
    </p>
  );

  return (
    <motion.main
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      exit={{ y: 1000 }}
      transition={{ duration: 0.7 }}
      className="mt-24 sm:mt-0"
    >
      <HomeLayout
        id={"p"}
        imgDesktop={hero}
        imgTablet={heroTablet}
        title={"PRICING"}
        text={heroTextPricing}
        className="bg-black text-white"
      />
      <div className="pt-32 flex flex-col items-center">
        <PriceToggler value={{ isToggled, toggleSwitch }} />
        <PricingPlans value={{ isToggled }} />
      </div>
      <div className="py-40">
        <h1 className="uppercase font-bold tracking-[2px] pb-14 text-center">
          compare
        </h1>
        <PricingTable />
      </div>
      <InviteQuicklink />
    </motion.main>
  );
};

export default PricingPage;
