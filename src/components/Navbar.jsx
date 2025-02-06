import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Courses', href: '#courses' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="/logo.png"
              alt="GenAi Logo"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu - centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-600 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
              </a>
            ))}
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center space-x-3">
           
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="border-t border-gray-200 pt-4 pb-3">
              
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
