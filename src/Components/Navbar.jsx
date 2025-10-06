import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, text: "Home", to: "home" },
    { id: 2, text: "About", to: "about" },
    { id: 3, text: "Skills", to: "skills" },
    { id: 4, text: "Projects", to: "projects" },
    { id: 5, text: "Certification", to: "certification" },
    { id: 6, text: "Contact", to: "contact" },
  ];

  // Close mobile menu when user scrolls
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50 bg-black backdrop-blur-sm">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="/Avatar.png"
            alt="Avatar"
            className="h-10 w-10 rounded-full shadow-lg animate-bounce"
          />
          <div>
            <h1 className="font-bold text-xl text-green-500 hover:text-green-400">
              Suraj Kumar
            </h1>
            <p className="text-sm text-gray-400 hover:text-gray-200">
              Front End Developer
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-white">
          {menuItems.map((item) => (
            <li key={item.id} className="hover:text-green-600 cursor-pointer transition-colors duration-300">
              <Link 
                to={item.to} 
                smooth={true} 
                duration={500} 
                offset={-80}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden relative">
          <button
            aria-label="Toggle Menu"
            className="text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {isOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-black text-white shadow-lg rounded-lg p-4 transition-all duration-300"
            >
              <ul className="flex flex-col space-y-3 font-medium">
                {menuItems.map((item) => (
                  <li key={item.id} className="hover:text-green-500 cursor-pointer transition-colors duration-300">
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
