import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-gray-800 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-4">
          <p>📞 +92 123 456 7890</p>
          <p>📧 info@example.com</p>
          <p>📍 Karachi, Pakistan</p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-800">MyBrand</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="md:hidden bg-white shadow-lg text-gray-700 font-medium flex flex-col items-center space-y-4 py-4">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        )}
      </nav>
      
        

    </div>
  );
};

export default Navbar;
