import React from 'react';
import Navbar from "./Navbar.jsx"
import { Typewriter } from 'react-simple-typewriter';
import { Button } from './reuseableUiComponents/button.jsx';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <div className="w-full min-h-scree  text-white relative">
      <div className='mb-16'>
        <Navbar />
      </div>

      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10 gap-10 md:mt-10">
        {/* Left content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}  
  transition={{ duration: 0.5 }}
  className="flex justify-center items-center mb-4 gap-4 sm:justify-start sm:gap-5"
>
  <a
    href="https://www.linkedin.com/in/sai-kedarisetti/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/socialMediaIcon/linkedin.svg"
      alt="LinkedIn Icon"
      className="w-10 h-10 p-2 border-2 border-[#03cea4] mx-auto md:mx-0 rounded-full bg-[#03cea4] sm:bg-transparent sm:hover:bg-[#03cea4] transition"
    />
  </a>

  <a href="#Contact">
    <img
      src="/socialMediaIcon/mail.png"
      alt="mail Icon"
      className="w-10 h-10 p-2 border-2 border-[#03cea4] mx-auto md:mx-0 rounded-full bg-[#03cea4] sm:bg-transparent sm:hover:bg-[#03cea4] transition"
    />
  </a>

  <a
    href="https://wa.me/+918074322007"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/socialMediaIcon/whatsapp.png"
      alt="WhatsApp Icon"
      className="w-10 h-10 p-2 border-2 border-[#03cea4] mx-auto md:mx-0 rounded-full bg-[#03cea4] sm:bg-transparent sm:hover:bg-[#03cea4] transition"
    />
  </a>
</motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold font-titan leading-tight text-white"
          >
            Hi, I'm <span className="text-[#03cea4]">Sai</span><br />
            A Freelance Developer
          </motion.div>
          <p className="text-lg text-gray-400 mt-3">
            Turning ideas into responsive, full-stack web applications with clean code and modern design.
          </p>

          <div className="mt-4 text-2xl text-[#03cea4] font-semibold h-[80px]">
            <Typewriter
              words={[
                'Freelance Web Developer 🌐',
                'Full Stack Engineer 💻',
                'MERN Stack Expert 🚀',
                'React & Next.js Specialist ⚛️',
                'Node.js Backend Developer 🧠',
                'API Integration Pro 🔗',
                'Custom Web Applications 🛠️',
                'Responsive UI Designer 🎨',
                'Landing Page Expert 📄',
                'Performance Optimizer ⚡',
                'Bug Fixing & Debugging 🔍',
                'Tailwind CSS Developer 💅',
                'Pixel Perfect Design 🎯',
                'E-commerce Solutions 🛒',
                'Portfolio & Business Sites 📁',
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          <a href="#Contact">
            <div className="mt-6 justify-center md:justify-start hidden sm:flex">
            <Button>Let's Work Together</Button>
          </div>
          </a>
        </div>

        {/* Right content */}
        <div className="w-full md:w-1/2 flex justify-center">
        {/* Desktop/Tablet Image */}
        <img
            src="/developer-img.png"
            alt="Freelancer"
            className="hidden md:block max-w-xs md:max-w-md lg:max-w-lg object-contain"
        />

        {/* Mobile Image */}
        <img
            src="/developer-image.jpg"
            alt="Freelancer"
            className="block md:hidden w-50 h-50 object-cover rounded-full shadow-lg"
        />
        </div>
      </div>
    </div>
  );
};

export default Home;
