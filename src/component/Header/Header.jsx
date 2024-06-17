import React, { useState } from 'react';
import logoImg from '../../assets/logo.png'; // Adjust the path as needed
import { MenuIcon, XIcon } from 'lucide-react';
// Assuming you have icons for hamburger and close (X)

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <header className=" px-10 py-1 flex justify-between items-center">
        <div className="flex justify-center items-center mx-4">
          <img src={logoImg} className="h-16 w-24 md:h-20 md:w-32" alt="Logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleNav} className="text-blue-900 focus:outline-none">
            {isNavOpen ? (
              <XIcon className="h-8 w-8" />
            ) : (
              <MenuIcon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`md:flex md:items-center ${isNavOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-7 text-blue-900 font-bold text-lg md:text-2xl">
            <li>Home</li>
            <li>Internship</li>
            <li>Mock Tests</li>
            <li>Learning</li>
            <li>About</li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <button className="bg-blue-900 px-4 py-2 rounded-2xl text-white text-lg md:text-xl md:py-1">Get started</button>
        </div>
      </header>
      <hr />
    </div>
  );
};

export default Header;
