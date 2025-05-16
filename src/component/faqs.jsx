import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqsData = [
  {
    question: "What is the process for starting a project?",
    answer:
      "The process begins with a consultation to understand your needs, followed by a proposal and timeline.",
  },
  {
    question: "Do you charge per hour or per project?",
    answer:
      "Charging per project works better for you and me. You know the price upfront and I can focus on creating something great without counting the hours.",
  },
  {
    question: "How often will we be in contact?",
    answer:
      "I promised to keep a healthy relationship with you. If that means a call every day, cool. If it means keeping in touch through a weekly email exchange, cool. Whatever works for you. Remember, I'm here to make your life easier, not more complicated.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary based on complexity, but I aim to deliver within the agreed timeframe.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I primarily use MERN stack technologies, but I'm open to other tech stacks based on project requirements.",
  },
  {
    question: "Do you provide ongoing support after the project is completed?",
    answer:
      "Yes, I offer maintenance and support packages to ensure your website runs smoothly.",
  },
  {
    question: "You didn't answer my question.",
    answer:
      "That's ok! I'm always happy to have a chat and discuss what's on your mind, so feel free to click on one of my social media icons on this page and pop me a message!",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-full px-6 md:px-20 py-16 bg-gray-900 text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Frequently asked questions
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqsData.map((faq, index) => (
          <motion.div
            key={index}
            className="border border-white/10 rounded-xl p-5 bg-white/5 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  className="mt-3 text-white/80"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
