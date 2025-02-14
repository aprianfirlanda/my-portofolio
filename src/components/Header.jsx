'use client';

import React, { useEffect } from 'react';
import HamburgerMenu from '@/components/HamburgerMenu';

function Header({ navItems }) {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');

      if (header !== null) {
        if (window.scrollY > 0) {
          header.classList.add('navbar-fixed');
        } else {
          header.classList.remove('navbar-fixed');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="absolute left-0 top-0 z-10 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <a href="#home" className="block py-6 text-lg font-bold text-transparent">
              <span className="bg-gradient-to-r from-teal-400 to-blue-300 bg-clip-text">
                virlandd.dev
              </span>
            </a>
          </div>
          <HamburgerMenu navItems={navItems} />
        </div>
      </div>
    </header>
  );
}

export default Header;
