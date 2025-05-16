"use client";
import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      title: "Basic Website",
      price: "₹2,999",
      features: [
        "1-2 Pages",
        "Responsive Design",
        "Basic Contact Form",
        "Delivery in 3-4 Days",
      ],
    },
    {
      title: "Standard Website",
      price: "₹4,999",
      features: [
        "Up to 5 Pages",
        "Responsive Design",
        "Contact Form + Gallery",
        "SEO Optimization",
        "Delivery in 5-7 Days",
      ],
      highlight: true,
    },
    {
      title: "Premium Website",
      price: "₹7,999",
      features: [
        "Up to 10 Pages",
        "Custom Features",
        "API Integrations",
        "Performance Optimization",
        "Delivery in 7-10 Days",
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-[#171820] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Affordable Pricing
        </h2>
        <p className="text-gray-300 mb-12">
          Choose a plan that suits your business needs. Quality work at
          beginner-friendly prices.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative flex flex-col h-full"
            >
              {plan.highlight && (
                <>
                  <div className="h-2 bg-yellow-400 rounded-t-2xl"></div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-[#171820] px-4 py-2 text-xs font-semibold rounded-full shadow-md z-10">
                    Recommended
                  </div>
                </>
              )}
              <div
                className={`flex flex-col justify-between flex-1 p-6 rounded-b-2xl rounded-t-none border transition-all duration-300 ${
                  plan.highlight
                    ? "bg-white text-[#0f766e] shadow-xl scale-105"
                    : "bg-[#124559]"
                }`}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                  <p className="text-3xl font-bold mb-6">{plan.price}</p>
                  <ul className="space-y-2 mb-6 text-sm md:text-base">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        ✅ <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("Contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full py-2 mt-4 rounded-lg font-semibold transition-all duration-200 ${
                    plan.highlight
                      ? "bg-[#0f766e] hover:bg-[#0d5c56] text-white"
                      : "bg-white text-[#0f766e] hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <p className="mt-8 text-[0.75rem] sm:text-sm text-center text-gray-300 px-4 sm:px-0">
        *Prices may vary based on additional features, custom functionality, or
        specific project requirements.
      </p>
    </section>
  );
};

export default Pricing;
