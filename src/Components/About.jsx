import React from "react";
import { GraduationCap } from "lucide-react";
import "../index.css"; // if About.jsx is in src/Components/

const About = () => {
  return (
    <div
      id="about"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 min-h-screen"
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10 text-white animate-fadeIn">
        About Me
        <span className="block w-32 h-1 bg-cyan-400 mx-auto mt-3 rounded"></span>
      </h1>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side - About Text */}
        <div className="space-y-6 animate-slideUp">
          <h2 className="text-2xl font-semibold text-white">
            Passionate Problem Solver
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I am passionate about solving complex problems, building scalable systems,
            and continuously learning new technologies to empower users and organizations.
            My journey in computer applications has been driven by curiosity and a desire
            to make a meaningful impact through technology.
          </p>
          <p className="text-gray-300 leading-relaxed">
            With strong foundations in <span className="text-green-400">Data Structures & Algorithms</span>,{" "}
            <span className="text-blue-400">Frontend Development</span>, 
            I focus on creating solutions
            that are not just functional, but also efficient and scalable for real-world applications.
          </p>

          {/* Signature */}
          <div className="flex items-center space-x-3 pt-4 hover:scale-105 transition transform duration-300">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
              SK
            </div>
            <div>
              <h3 className="font-semibold text-white">Suraj Kumar</h3>
              <p className="text-gray-400 text-sm">BCA Student</p>
            </div>
          </div>
        </div>

        {/* Right Side - Education Card */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition transform duration-300 animate-slideUp">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <h2 className="text-xl font-semibold text-gray-300">Education</h2>
          </div>

          <h3 className="text-lg font-bold text-gray-300">
            Bachelor of Computer Applications (BCA)
          </h3>
          <p className="text-gray-400 mt-1">
            📍 Swami Rama Himalayan University, Dehradun, India
          </p>
          <p className="text-gray-400">📅 2023 – 2026</p>

          {/* Focus Areas */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4">
            <p className="text-gray-300 font-semibold mb-2">Focus Areas:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Data Structures & Algorithms</li>
              <li>Frontend Development (React, Tailwind)</li>
              <li>Problem Solving & Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
