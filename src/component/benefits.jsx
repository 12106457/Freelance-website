import React from "react";
import { motion } from "framer-motion";
import { FaThumbsUp } from "react-icons/fa";
import { FaRegClock, FaDollarSign } from "react-icons/fa6";
import { TbUsers } from "react-icons/tb";
import { IoBagSharp } from "react-icons/io5";
import { RiShakeHandsFill } from "react-icons/ri";

// Icons use a consistent style
const benefitsData = [
  {
    content: "Attract clients who value quality",
    icon: <FaThumbsUp className="text-4xl text-[#03cea4]" />,
  },
  {
    content: "More time to focus on your business",
    icon: <FaRegClock className="text-4xl text-[#03cea4]" />,
  },
  {
    content: "Turn leads into paying customers",
    icon: <FaDollarSign className="text-4xl text-[#03cea4]" />,
  },
  {
    content: "Reach a larger, more curious audience",
    icon: <TbUsers className="text-4xl text-[#03cea4]" />,
  },
  {
    content: "Own a beautiful website that works 24/7",
    icon: <IoBagSharp className="text-4xl text-[#03cea4]" />,
  },
  {
    content: "Build trust with your ideal clients",
    icon: <RiShakeHandsFill className="text-4xl text-[#03cea4]" />,
  },
];

const Benefits = () => {
  return (
    <div className="benefits-container px-4 md:px-24 lg:px-16 pt-16 pb-20 lg:pt-32 lg:pb-40">
      <motion.h2
        className="text-4xl font-bold text-center mb-20 text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Ways you'll benefit
      </motion.h2>

      <motion.section
        className="all-benefits-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-12 md:mx-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={index}
            className="benefit-item flex flex-col items-center gap-4 cursor-pointer bg-[#1c1d26] rounded-lg p-4"
            variants={{ 
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="benefit-icon">{benefit.icon}</div>
            <p className="benefit-text text-white text-lg text-center">{benefit.content}</p>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default Benefits;
