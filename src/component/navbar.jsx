import React, { useState, useEffect } from 'react';
import { Button } from './reuseableUiComponents/button.jsx';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = ["Home", "Services", "Tools", "Pricing", "Faqs","Contact"];

  const handleNavClick = (item) => {
    setActiveTab(item);
    setMenuOpen(false);
  };

  // === Auto detect section on scroll ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveTab(sectionId);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <>
      <div className='w-full h-16 flex justify-between items-center px-5 fixed left-0 right-0 top-0 z-50 shadow-lg bg-[#171820]'>
        <a href="#Home">
          <img src='/logo.png' alt='Logo' className='w-10 h-10 cursor-pointer' />
        </a>

        {/* Desktop Nav */}
        <div className='hidden md:flex flex-1 justify-end items-center pr-10'>
          <ul className='flex gap-6'>
            {navItems.map((item) => (
              <a href={`#${item}`} key={item}>
                <li
                  className={`text-white text-lg cursor-pointer relative pb-1 ${
                    activeTab === item ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white' : ''
                  }`}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </li>
              </a>
            ))}
          </ul>
        </div>

        {/* Hire Me + Menu Icon */}
        <div className='flex items-center gap-5'>
          <a href='#Contact'>
            <Button>Hire me</Button>
          </a>
          <div className='md:hidden text-white text-2xl cursor-pointer' onClick={() => setMenuOpen(true)}>
            <FaBars />
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? 'bg-black bg-opacity-40 visible' : 'invisible'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-white text-black z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-lg`}
      >
        <div className='flex justify-between items-center p-4 border-b'>
          <h2 className='text-xl font-bold'>Menu</h2>
          <FaTimes className='text-2xl cursor-pointer' onClick={() => setMenuOpen(false)} />
        </div>
        <ul className='flex flex-col p-6 gap-4'>
          {navItems.map((item) => (
            <a href={`#${item}`} key={item}>
              <li
                className={`text-lg cursor-pointer ${
                  activeTab === item ? 'border-b-2 border-black pb-1 font-semibold' : ''
                }`}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </li>
            </a>
          ))}
          <a href="#Contact">
            <li className='pt-4'>
            <Button className={"border-2 border-black w-full text-black flex justify-center items-center"}>Hire me</Button>
          </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
