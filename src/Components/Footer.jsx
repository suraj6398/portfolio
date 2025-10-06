import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6 text-center">
      {/* Profile Info */}
      <div className="flex flex-col items-center space-y-3">
        {/* Avatar with initials */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white font-bold text-md">
          SK
        </div>

        {/* Name */}
        <h2 className="text-lg font-semibold text-white">Suraj Kumar</h2>

        {/* Social Icons */}
        <div className="flex space-x-3 mt-1">
          <a
            href="https://github.com/suraj-kumar"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 hover:scale-110 transition-transform duration-200"
          >
            <FaGithub className="text-white text-sm" />
          </a>
          <a
            href="https://linkedin.com/in/suraj-kumar"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin className="text-white text-sm" />
          </a>
          <a
            href="mailto:suraj26976@gmail.com"
            aria-label="Send Email"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 hover:scale-110 transition-transform duration-200"
          >
            <FaEnvelope className="text-white text-sm" />
          </a>
        </div>

        {/* Quote */}
        <p className="max-w-xl text-xs text-gray-300 italic mt-3">
          "Passionate about solving complex problems and building scalable
          solutions that empower users and organizations."
        </p>
      </div>

      {/* Bottom */}
      <div className="mt-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Suraj Kumar. Built with ❤️ using modern web
        technologies.
      </div>
    </footer>
  );
};

export default Footer;
