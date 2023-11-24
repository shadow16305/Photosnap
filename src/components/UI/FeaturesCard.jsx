import { motion } from "framer-motion";

const FeaturesCard = (props) => {
  const variants = {
    offScreen: {
      opacity: 0,
    },
    onScreen: {
      opacity: 1,
      transition: {
        duration: props.duration,
      },
    },
  };
  return (
    <motion.div
      initial="offScreen"
      whileInView="onScreen"
      viewport={{ once: true }}
      variants={variants}
      className="flex flex-col items-center justify-end text-center h-[236px]"
    >
      <img src={props.img} className="max-w-[70px]" alt="feature icon" />
      <span className="text-lg font-bold mt-12">{props.title}</span>
      <p className="opacity-70 mt-4 max-w-[350px] h-[75px]">
        {props.description}
      </p>
    </motion.div>
  );
};

export default FeaturesCard;
