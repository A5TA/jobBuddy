'use client';
import React, { useState } from 'react';
import { Button } from '@job-buddy/button';

interface Props {
  transparent?: boolean;
  isLoggedIn?: boolean;
  profileImage?: string;
}

const Navbar: React.FC<Props> = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const handleLogin = () => {
    console.log('Log In button clicked');
  };

  const handleSignUp = () => {
    console.log('Sign Up button clicked');
  };

  const handleMyJobs = () => {
    console.log('My Jobs button clicked');
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <nav
      className={`flex flex-wrap items-center justify-between px-4 py-3 ${
        props.transparent ? 'absolute z-50 w-full' : 'relative bg-white shadow-lg'
      }`}
    >
      <div className="container mx-auto flex justify-between">
        {/* Left Side - Brand */}
        <div className="flex items-center">
          <a
            className={`text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase ${
              props.transparent ? 'text-white' : 'text-gray-800'
            }`}
            href="/"
          >
            Job Buddy
          </a>
          <button
            className={`cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none ${
              props.transparent ? 'text-white' : 'text-gray-800'
            }`}
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="fas fa-bars"></span>
          </button>
        </div>

        {/* Center - Navigation Links */}
        <div
          className={`flex-grow items-center ${
            navbarOpen ? 'block' : 'hidden'
          } lg:flex lg:bg-transparent lg:shadow-none`}
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <a
                className={`px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ${
                  props.transparent ? 'lg:text-white lg:hover:text-gray-300 text-gray-800' : 'text-gray-800 hover:text-gray-600'
                }`}
                href="/jobs"
              >
                Jobs
              </a>
            </li>
            <li className="flex items-center">
              <a
                className={`px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ${
                  props.transparent ? 'lg:text-white lg:hover:text-gray-300 text-gray-800' : 'text-gray-800 hover:text-gray-600'
                }`}
                href="/companies"
              >
                Companies
              </a>
            </li>
            <li className="flex items-center">
              <a
                className={`px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ${
                  props.transparent ? 'lg:text-white lg:hover:text-gray-300 text-gray-800' : 'text-gray-800 hover:text-gray-600'
                }`}
                href="/about"
              >
                About
              </a>
            </li>
            <li className="flex items-center">
              <a
                className={`px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ${
                  props.transparent ? 'lg:text-white lg:hover:text-gray-300 text-gray-800' : 'text-gray-800 hover:text-gray-600'
                }`}
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Right Side - Buttons */}
          <div className="flex space-x-4 ml-auto gap-2">
            {props.isLoggedIn ? (
              <>
                {/* Show 'My Jobs' button when logged in */}
                <Button onClick={handleMyJobs} variant="primary">My Jobs</Button>

                {/* Profile Icon with Dropdown */}
                <div className="relative">

                  <img 
                    id="avatarButton" 
                    ata-dropdown-toggle="userDropdown" 
                    data-dropdown-placement="bottom-start" 
                    className="w-10 h-10 rounded-full cursor-pointer" 
                    src={props.profileImage || '/default-profile.png'} 
                    alt="User dropdown"
                    onClick={toggleProfileDropdown}
                  />
                  {profileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg mt-3">
                      <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>Bonnie Green</div>
                        <div className="font-medium truncate">name@flowbite.com</div>
                      </div>
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Theme</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleLogout}>Sign out</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Button onClick={handleLogin} variant="primary">Log In</Button>
                <Button onClick={handleSignUp} variant="secondary">Sign Up</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
