import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';


const FixedHeader = () => {
  const [navfix, setNavfix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 70) {
      setNavfix(true);
    } else {
      setNavfix(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setFixed);
    return () => {
      window.removeEventListener('scroll', setFixed);
    };
  }, []);

  return (
    <div
      className={`z-20 ${
        navfix
          ? 'fixed top-0 shadow-lg w-full bg-white transition-all duration-300 ease-in-out'
          : ''
      }`}
    >
      <NavBar className="relative" />
    </div>
  );
};

export default FixedHeader;
