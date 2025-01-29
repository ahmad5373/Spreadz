import React, { useEffect, useState } from 'react';
import ENG from "../../../assets/EN.png";
import GE from "../../../assets/GE.png";
import Logo from "../../../assets/Logo.png";
import Button from '../../button/Button';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../../customComponents/Container.';
import { useAuth } from '../../auth/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import '../../../i18n';


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { t , i18n} = useTranslation();
  
  const storedLanguage = localStorage.getItem('language') || 'de';
  const [currentLanguage, setCurrentLanguage] = useState(storedLanguage);
  console.log(currentLanguage, "current language")
const changeLanguage = (language) => {
  setCurrentLanguage(language)
  localStorage.setItem('language', language)
  i18n.changeLanguage(language)
}
  const handleToggleProfile = () => setIsProfileOpen(prev => !prev);
  useEffect(() => {
    if(!localStorage.getItem('language')){
      localStorage.setItem('language', 'de')
    }
    i18n.changeLanguage(currentLanguage);
    // const savedLanguage = localStorage.getItem('currentLanguage');
    // if (savedLanguage) {
    //   setCurrentLanguage(savedLanguage);
    // }
    // setTimeout(() => {
    //   const selectElementToRemove = document.querySelector(".skiptranslate");
    //   if (selectElementToRemove) {
    //     selectElementToRemove.style.display = 'none';
    //   }
    // }, 2000);
  }, [currentLanguage, i18n])
  // const switchLanguage = (language) => {
  //   try {
  //     const selectElement = document.querySelector("select.goog-te-combo");
  //     if (selectElement) {
  //       setTimeout(() => {
  //         const selectElementToRemove = document.querySelector(".skiptranslate");
  //         if (selectElementToRemove) {
  //           selectElementToRemove.style.display = 'none';
  //         }
  //       }, 2000);
  //       selectElement.value = language;
  //       const changeEvent = new Event("change", { bubbles: true });
  //       selectElement.dispatchEvent(changeEvent);
  //       localStorage.setItem('currentLanguage', language);
  //       setCurrentLanguage(language);
  //     } else {
  //       console.error("Google Translate select element not found.");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }

  // };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  }

  const registerSubmit = () => {
    console.log("Register button clicked");
    navigate("/register")
  }
  return (
    <nav className="bg-white w-full z-10 fixed top-0 start-0 border-b border-gray-200">
      <Container className='px-4 lg:px-10 xl1:px-20'>
        <div className="flex items-center justify-between text-sm py-2 lg:space-x-8 flex-wrap lg:flex-nowrap">

          <Link to="/" className="hidden md:flex items-center space-x-3">
            <img src={Logo} className=" " alt="Logo" />
          </Link>

          <div className="hidden lg:flex space-x-4">
            <Link to="/about-us" className=" hover:text-orange-500 base-font  xl1:text-sm lg:text-xs " onClick={handleLinkClick} >{t('AboutUs')}</Link>
            <Link to="/our-story" className=" hover:text-orange-500 base-font xl1:text-sm lg:text-xs ">{t('OurStory')}</Link>
            <Link to="/pricing" className=" hover:text-orange-500 base-font xl1:text-sm lg:text-xs ">{t('PlanPricing')}</Link>
            <Link to="/blogs" className=" hover:text-orange-500 base-font xl1:text-sm lg:text-xs ">{t('Blogs')}</Link>
            <Link to="/contact-us" className=" hover:text-orange-500 base-font xl1:text-sm lg:text-xs ">{t('ContactUs')}</Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img src={GE} className="h-3 w-5" alt="GE" />
              <button
                onClick={() => {
                  const newLanguage = currentLanguage === "en" ? "de" : "en";
                  changeLanguage(newLanguage);
                }}
                className={`w-10 h-6 flex items-center bg-black rounded-full p-1 transition-all ${currentLanguage === "en" ? "justify-end" : "justify-start"
                  }`}
                aria-label="Language Toggle"
              >
                <span className="w-4 h-4 bg-white rounded-full"></span>
              </button>
              <img src={ENG} className="h-3 w-5" alt="EN" />
            </div>
            {user &&
              <div>
                <button type="button" className="flex text-sm rounded-full md:mr-0" onClick={handleToggleProfile} aria-expanded={isProfileOpen}>
                  <div className='flex items-center text-sm drop-shadow-lg'>
                    <img className='rounded-full drop sm:mr-2 w-9 h-9 object-cover' src='https://images.pexels.com/photos/7289120/pexels-photo-7289120.jpeg?auto=compress&cs=tinysrgb&w=600' alt='users' />
                    <span className='hidden sm:block'>{user.name}</span>
                  </div>
                </button>
                <div className={`z-50 ${isProfileOpen ? null : 'hidden'} absolute w-36 px-4 my-4 text-gray-950 font-medium list-none bg-white backdrop-blur-md rounded-lg`}>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <button onClick={logout} className="block px-4 py-2 text-sm hover:bg-orange-150 hover:text-white hover:rounded-md ">
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            }
            {!user &&
              <>

                <Link to="/login" className="text-orange-150 hover:text-orange-600 font-medium">{t('Login')}</Link>
                <Button
                  className="text-white bg-orange-150 hover:bg-orange-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                  onClick={registerSubmit}
                  label={t('Register')}
                />
              </>
            }
          </div>

          <div className="m-0 flex items-center justify-between w-full lg:hidden mr-6">

            <div>
              <button
                className="inline-flex items-center w-10 h-10  text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-controls="navbar-sticky"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>

            <div className='flex space-x-2'>
              <div className="flex items-center space-x-2">
                <img src={GE} className="h-3 w-4" alt="GE" />
                <button
                  onClick={() => {
                    const newLanguage = currentLanguage === "en" ? "de" : "en";
                    changeLanguage(newLanguage);
                    setCurrentLanguage(newLanguage);
                  }}
                  className={`w-8 h-4 flex items-center bg-black rounded-full p-1 transition-all ${currentLanguage === "en" ? "justify-end" : "justify-start"
                    }`}
                  aria-label="Language Toggle"
                >
                  <span className="w-3 h-3 bg-white rounded-full"></span>
                </button>
                <img src={ENG} className="h-3 w-4" alt="EN" />
              </div>

              <Link
                to="/login"
                className="text-sm font-medium text-white bg-orange-150 hover:bg-orange-400 px-4 py-2 rounded-lg"
              >
                {t('Login')}
              </Link>
            </div>
          </div>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden w-full`} id="navbar-sticky">
            <ul className="flex flex-col p-4 m t-4 border border-gray-100 rounded-lg bg-gray-50 ">
              <li><Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" onClick={handleLinkClick}>{t('Home')}</Link></li>
              <li><Link to="/about-us" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" onClick={handleLinkClick}>{t('AboutUs')}</Link></li>
              <li><Link to="/our-story" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" onClick={handleLinkClick}>{t('OurStory')}</Link></li>
              <li><Link to="/pricing" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" onClick={handleLinkClick}>{t('PlanPricing')}</Link></li>
              <li><Link to="/blogs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" onClick={handleLinkClick}>{t('Blog')}</Link></li>
              <li><Link to="/contact-us" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100" onClick={handleLinkClick}>{t('ContactUs')}</Link></li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
