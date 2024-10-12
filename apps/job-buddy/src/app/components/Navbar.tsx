import React, { useState } from 'react';
import { Button } from '@job-buddy/button';

interface Props {
  transparent?: boolean;
}

const Navbar: React.FC<Props> = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLogin = () => {
    console.log('Log In button clicked');
  };

  const handleSignUp = () => {
    console.log('Sign Up button clicked');
  };

  return (
    <nav
      className={`flex flex-wrap items-center justify-between px-4 py-3 ${
        props.transparent ? 'absolute z-50 w-full' : 'relative bg-white shadow-lg'
      }`}
    >
      <div className="container mx-auto flex justify-between">
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
                href="/about"
              >
                About
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 ml-auto">
            <Button onClick={handleLogin} variant='primary'>Log In</Button>
            <Button onClick={handleSignUp} variant='secondary'>Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
