import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Home from './component/home.jsx';
import Achievements from './component/achievements.jsx';
import Services from './component/services.jsx';
import Tools from './component/tools.jsx';
import Benefits from './component/benefits.jsx';
import Faqs from './component/faqs.jsx';
import ContactUs from './component/contactUs.jsx';
import Footer from './component/footer.jsx';
import Pricing from './component/priceing.jsx';

const App = ({ target = 3 }) => {
  const count = useMotionValue(0);
  const [showRocket, setShowRocket] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const controls = animate(count, target, { duration: 1 });
    return controls.stop;
  }, [target]);

  useEffect(() => {
    const handleScroll = () => {
      setShowRocket(window.scrollY > window.innerHeight / 1.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRocketClick = () => {
    setIsLaunching(true);

    setTimeout(() => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Reset rocket after animation
      setTimeout(() => setIsLaunching(false), 800);
    }, 500); // Allow animation to play before scroll
  };

  return (
    <div className="bg-[#171820] text-white min-h-screen overflow-auto relative">
      <div id="Home"><Home /></div>
      <div id='Services'><Services /></div>
      <div id="Tools"><Tools /></div>
      <div><Benefits /></div>
      <div><Achievements /></div>
      <div id='Pricing'><Pricing /></div>
      <div id='Faqs'><Faqs /></div>
      <div id='Contact'><ContactUs /></div>
      <div><Footer /></div>
      
      {/* 🚀 Rocket Launch Button */}
      {showRocket && !isLaunching && (
        <motion.button
          onClick={handleRocketClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 p-2 rounded-full bg-[#0f766e] shadow-xl border-2 border-white z-50"
        >
          <img src="/socialMediaIcon/rocket.png" alt="Rocket Icon" className="w-8 h-8" />
        </motion.button>
      )}

      {/* 🚀 Launch Animation */}
      {isLaunching && (
        <motion.img
          src="/socialMediaIcon/rocket.png"
          alt="Rocket Launch"
          className="fixed bottom-6 right-6 w-8 h-8 z-50"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -500, opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeIn' }}
        />
      )}
    </div>
  );
};

export default App;
