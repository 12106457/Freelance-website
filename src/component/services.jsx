'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  LayoutDashboard,
  Plug,
  Bug,
  Zap,
  ShieldCheck,
} from 'lucide-react';

const websiteTypes = [
  "Business Websites",
  "Corporate Websites",
  "Personal Websites",
  "Portfolio Websites",
  "Blogs & News Websites",
  "Landing Pages",
  "Real Estate Websites",
  "Healthcare Websites",
  "Educational Websites",
  "Web Applications",
  "Event & Conference Websites",
  "News & Magazine Websites",
  "Entertainment Websites",
  "Non-Profit/Charity Websites",
  "Government Websites",
];

const services = [
  {
    icon: Code,
    title: 'Website Development',
    description:
      'I build fast, secure, and fully responsive websites using modern MERN technologies tailored to your goals.',
  },
  {
    icon: LayoutDashboard,
    title: 'Custom Web Applications',
    description:
      'From dashboards to marketplaces, I craft full-stack apps with scalable backend and clean UI.',
  },
  {
    icon: Plug,
    title: 'API Integration',
    description:
      'Connect with third-party APIs like payments, CRMs, or analytics to boost functionality.',
  },
  {
    icon: Bug,
    title: 'Bug Fixing & Debugging',
    description:
      'Quick identification and resolution of frontend or backend issues to keep your app stable.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Improve load speed, reduce API latency, and optimize code for a better user experience.',
  },
  {
    icon: ShieldCheck,
    title: 'Maintenance & Support',
    description:
      'Ongoing updates, monitoring, and fixes to ensure smooth performance post-launch.',
  },
];

const Services = () => {
  return (
    <section className="w-full px-6 md:px-20 py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Services
      </motion.h2>

      <motion.p
        className="text-center text-[#bfd0db] mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        I provide end-to-end solutions to bring your ideas to life — from frontend development to backend architecture and everything in between.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              className="group bg-transparent  rounded-xl p-6 transition-all duration-300 hover:bg-[#03cea4]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="transition-transform duration-500 group-hover:rotate-[360deg]">
                  <Icon className="w-10 h-10 text-[#03cea4] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#ffffff] group-hover:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-[#bfd0db] group-hover:text-white leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
      <WebsiteScrollList/>

    </section>
  );
};

export default Services;


const WebsiteScrollList = () => {
  return (
   <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{  duration: 0.6 }}
    viewport={{ once: true }}
   >
     <marquee
      style={{ whiteSpace: "nowrap", fontSize: "1.25rem", padding: "10px",marginTop: "15px"}}
      scrollamount="15"  // increase speed here
      behavior="scroll" loop="infinite"
    >
      {websiteTypes.map((type, index) => (
        <span
          key={index}
          style={{ marginRight: "40px", backgroundColor: "#03cea4", padding: "5px", borderRadius: "5px" }}
        className='select-none'
        >
          {type}
        </span>
      ))}
    </marquee>
   </motion.div>
  );
};

