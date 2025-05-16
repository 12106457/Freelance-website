import React from "react";
import { motion } from "framer-motion";

const frontendTools = [
  { title: "HTML", icon: "/techIcons/html.svg" },
  { title: "JavaScript", icon: "/techIcons/js.svg" },
  { title: "CSS", icon: "/techIcons/css.svg" },
  { title: "React", icon: "/techIcons/react.svg" },
  { title: "Next.js", icon: "/techIcons/nextjs.svg" },
  { title: "Tailwind CSS", icon: "/techIcons/tailwind.svg" },
];

const backendTools = [
  { title: "Node.js", icon: "/techIcons/nodejs.svg" },
  { title: "Express.js", icon: "/techIcons/expressjs.svg" },
  { title: "MongoDB", icon: "/techIcons/mongodb.svg" },
];

const otherTools = [
  { title: "Git", icon: "/techIcons/git.svg" },
  { title: "GitHub", icon: "/techIcons/github.svg" },
  { title: "Figma", icon: "/techIcons/figma.svg" },
  { title: "Postman", icon: "/techIcons/postman.svg" },
  { title: "Vercel", icon: "/techIcons/netlify.svg" },
  { title: "VS Code", icon: "/techIcons/vscode.svg" },
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ToolSection = ({ title, tools }) => (
  <div className="mb-10">
    <h3 className="text-2xl font-semibold text-center mb-10">{title}</h3>
    {/* <div className="w-full flex justify-center"> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.title}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 1 }}
            className="flex flex-col items-center text-center bg-[#1c1d26] p-3 rounded-lg cursor-pointer"
          >
            <motion.img
              src={tool.icon}
              alt={tool.title}
              className="w-10 h-10 mb-2"
              whileHover={{ rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <span className="text-sm font-medium">{tool.title}</span>
          </motion.div>
        ))}
      </div>
    {/* </div> */}
  </div>
);

const Tools = () => {
  return (
    <section className="w-full px-6 md:px-20 py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Tools
      </motion.h2>

      <ToolSection title="Frontend Tools" tools={frontendTools} />
      <ToolSection title="Backend Tools" tools={backendTools} />
      <ToolSection title="General" tools={otherTools} />
      
    </section>
  );
};

export default Tools;
