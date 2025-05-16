import React from 'react';
import NumberAnimation from './reuseableUiComponents/numberAnimation.jsx';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <div className="w-full px-6 md:px-20 py-16 ">
      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Achievements
      </motion.div>

      {/* Cards Container */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-8">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-[220px] h-[120px] bg-white rounded-xl shadow-md flex flex-col items-center justify-center text-center p-4 hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            <NumberAnimation target={5} />+
          </h2>
          <p className="text-sm text-gray-600 mt-2">Projects Completed</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="w-[220px] h-[120px] bg-white rounded-xl shadow-md flex flex-col items-center justify-center text-center p-4 hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            <NumberAnimation target={3} />+
          </h2>
          <p className="text-sm text-gray-600 mt-2">Happy Clients</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="w-[220px] h-[120px] bg-white rounded-xl shadow-md flex flex-col items-center justify-center text-center p-4 hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            <NumberAnimation target={12} />+
          </h2>
          <p className="text-sm text-gray-600 mt-2">Months Experience</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
