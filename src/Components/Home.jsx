import React from 'react';
import { FaLinkedin, FaWhatsapp, FaTelegram, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiGreensock } from "react-icons/si"; 
import {ReactTyped} from "react-typed";
import "../index.css"; // if About.jsx is in src/Components/

const Home = () => {
  return (
<div
  id="home"
  className="min-h-screen flex flex-col items-center justify-center px-4 md:px-20 my-20 scroll-mt-24"
>
  <div className="text-center space-y-6 md:space-y-10 animate-fadeIn">

    {/* Intro */}
    <span className="text-white text-xl md:text-2xl block">Welcome to my feed</span>

    {/* Animated Typing */}
    <div className="flex flex-wrap justify-center gap-2 text-3xl md:text-5xl font-bold items-center">
      <h1 className="text-white">Hello, I'm a</h1>
      <ReactTyped
        strings={["Developer", "Programmer", "Coder"]}
        typeSpeed={60}
        backSpeed={40}
        loop
        className="text-green-500"
      />
    </div>

    {/* Description */}
    <p className="text-white text-lg md:text-xl max-w-3xl md:text-center">
      A developer who loves turning ideas into real-world solutions with React, Tailwind CSS,
      JavaScript, C++, and Node.js. Let’s create something amazing together!
    </p>

    {/* Socials + Tech */}
    <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-12 mt-8">

      {/* Social Media */}
      <div>
        <h2 className="text-white font-bold mb-3 text-lg text-center md:text-left">Available on</h2>
        <div className="flex gap-8 justify-center">
          <a href="https://www.linkedin.com/in/suraj-kumar-48868a351/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors duration-300">
            <FaLinkedin size={36} />
          </a>
          <a href="https://wa.me/916398908143" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-500 transition-colors duration-300">
            <FaWhatsapp size={36} />
          </a>
          <a href="https://t.me/Suraj6398" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors duration-300">
            <FaTelegram size={36} />
          </a>
        </div>
      </div>

      {/* Currently Working On */}
      <div>
        <h2 className="text-white font-bold mb-3 text-lg text-center md:text-left">Currently working on</h2>
        <div className="flex flex-wrap gap-6 justify-center text-gray-300 font-medium text-lg">
          <FaReact size={28} className="hover:text-cyan-400 transition duration-300" />
          <SiTailwindcss size={28} className="hover:text-sky-400 transition duration-300" />
          <SiGreensock size={28} className="hover:text-yellow-400 transition duration-300" />
          <FaNodeJs size={28} className="hover:text-green-500 transition duration-300" />
        </div>
      </div>

    </div>
  </div>
</div>

  );
};

export default Home;
