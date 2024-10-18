import React, { useState } from 'react';
import ENG from "../assets/EN.png";
import GE from "../assets/GE.png";
import Logo from "../assets/Logo.png";
import Language from "../assets/Language.png";
import Button from './button/Button';
import { Link } from 'react-router-dom';
import Container from '../customComponents/Container.';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleLinkClick = () => {
    console.log("click the link");
    console.log("isMenuOpen =>", isMenuOpen);
    setIsMenuOpen(false);
  }

  const registerSubmit = () => {
    console.log("Register button clicked");
  }

  return ( 
    <nav className="bg-white w-full z-10 fixed top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <Container className='px-4 lg:px-10 xl1:px-20'>
      <div className="flex items-center justify-between py-2 space-x-4 lg:space-x-8 flex-wrap lg:flex-nowrap">

        <Link to="/" className="hidden md:flex items-center space-x-3">
          <img src={Logo} className="h-8 w-36" alt="Logo" />
        </Link>

        <div className="hidden lg:flex space-x-6">
          <Link to="/about-us" className="text-gray-900 hover:text-orange-500 font-medium" onClick={handleLinkClick} >About Us</Link>
          <Link to="/our-story" className="text-gray-900 hover:text-orange-500 font-medium">Our Story</Link>
          <Link to="/pricing" className="text-gray-900 hover:text-orange-500 font-medium">Plan & Pricing</Link>
          <Link to="/blogs" className="text-gray-900 hover:text-orange-500 font-medium">Blogs</Link>
          <Link to="/contact-us" className="text-gray-900 hover:text-orange-500 font-medium">Contact Us</Link>
          <Link to="/social-media" className="text-gray-900 hover:text-orange-500 font-medium">Social Media</Link>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <img src={GE} className="h-3 w-5" alt="GE" />
            <button className="px-2 py-1">
              <img src={Language} alt="Language" />
            </button>
            <img src={ENG} className="h-3 w-5" alt="EN" />
          </div>

          <Link to="/login" className="base-color hover:text-orange-600 font-medium">Login</Link>
          <Button
            className="text-white bg-base-color hover:bg-orange-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
            onClick={registerSubmit}
            label="Register"
          />
        </div>

        <div className="flex items-center justify-between w-full lg:hidden">
          <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <Link
            to="/login"
            className="text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg"
          >
            Login
          </Link>
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden w-full`} id="navbar-sticky">
          <ul className="flex flex-col p-4 m t-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800">
            <li><Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about-us" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" onClick={handleLinkClick}>About Us</Link></li>
            <li><Link to="/our-story" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" onClick={handleLinkClick}>Our Story</Link></li>
            <li><Link to="/pricing" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" onClick={handleLinkClick}>Plan & Pricing</Link></li>
            <li><Link to="/blogs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" onClick={handleLinkClick}>Blogs</Link></li>
            <li><Link to="/contact-us" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" onClick={handleLinkClick}>Contact Us</Link></li>
            <li><Link to="/social-media" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" onClick={handleLinkClick}>Social Media</Link></li>
          </ul>
        </div>
      </div>
      </Container>
    </nav>

  );
}

export default NavBar;
