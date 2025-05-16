import React from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#03cea4] text-white px-6 py-10 mt-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + Name */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Sai Kedarisetti</h2>
          <p>Freelance Developer building modern, responsive web apps.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#Home" className="hover:text-white">Home</a></li>
            <li><a href="#About" className="hover:text-white">About</a></li>
            <li><a href="#Projects" className="hover:text-white">Projects</a></li>
            <li><a href="#Contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p>Email: <a href="mailto:kedarisettysai440@gmail.com" className="hover:text-white">kedarisettysai440@gmail.com</a></p>
          <p>Phone: <a href="tel:+918074322007" className="hover:text-white">+91 80743 22007</a></p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/sai-kedarisetti/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com/12106457"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://wa.me/918074322007?text=Hi%2C%20I%20came%20from%20your%20website!"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Sai Kedarisetti. All rights reserved.
      </div>

      
    </footer>
  );
};

export default Footer;
