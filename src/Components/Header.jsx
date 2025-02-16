import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaBehance, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full h-[80vh]">
      {/* Top Contact Bar */}
      <div className="w-full flex justify-center mt-0 relative z-20 hidden md:flex">
        <div className="inherit shadow-md py-3 px-8 rounded-lg 
        flex flex-col md:flex-row items-center 
        justify-between w-[950px] text-white space-y-4 md:space-y-0 text-lg">
          
          {/* Contact Info */}
          <div className="flex space-x-6">
            <p>📞 +92 123 456 7890</p>
            <p>📧 info@example.com</p>
            <p>📍 Karachi, Pakistan</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaBehance size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Background Color Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,122,255,0.41)] z-10"></div>

      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ backgroundImage: `url('/src/assets/01-1.jpg')` }}>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 space-y-6 z-10">
        <h2 className="text-2xl md:text-4xl font-bold">Learn the fundamentals with our</h2>
        <h2 className="text-3xl md:text-5xl font-bold">
          Experts in
          <ReactTyped className='pl-5 text-cyan-400'
            strings={["Programming", "Web Design", "Social Skills"]}
            typeSpeed={80}
            loop={true}
            backSpeed={80}
          />
        </h2>

        {/* Centered Search Bar */}
        <form method="GET" action="#"
          className="flex bg-white rounded-lg overflow-hidden w-full max-w-lg">
          <input type="search" name="search" placeholder="Search Internships..."
            className="px-4 py-3 w-full text-gray-800 outline-none text-lg" />
          <button type="submit" className="px-6 bg-blue-600 text-white text-lg">
            🔍
          </button>
        </form>

        <p className="text-xl md:text-2xl">Learn the fundamentals with our</p>
      </div>

      {/* Small Navbar Below Hero */}
      <div className="w-full flex justify-center mt-0 relative z-20">
        <nav className="bg-white/80 inherit border border-gray-300 shadow-md py-3 px-8 rounded-lg 
        flex flex-col md:flex-row items-center justify-between w-[950px] text-lg">

          {/* Logo */}
          <img src="/src/assets/blue-official.png" alt="Logo" className="h-12" />

          {/* Mobile Menu Button */}
          <div className="absolute right-6 top-4 md:hidden">
            {isOpen ? 
              <AiOutlineClose onClick={() => setIsOpen(!isOpen)} className='text-gray-700 text-3xl' /> : 
              <AiOutlineMenu onClick={() => setIsOpen(!isOpen)} className='text-gray-700 text-3xl' />
            }
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-lg px-4 gap-5">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
            <button className="border border-blue-400 bg-blue-500 text-white rounded-lg px-6 py-2 text-lg">
              IPORTAL LOGIN
            </button>
          </ul>

          {/* Responsive Menu */}
          <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black cursor-pointer top-[92px] 
            ${isOpen ? 'right-0' : 'right-[-100%]'}`}>
            <li className="p-6 text-lg cursor-pointer" onClick={() => setIsOpen(false)}>Home</li>
            <li className="p-6 text-lg cursor-pointer" onClick={() => setIsOpen(false)}>About</li>
            <li className="p-6 text-lg cursor-pointer" onClick={() => setIsOpen(false)}>Services</li>
            <li className="p-6 text-lg cursor-pointer" onClick={() => setIsOpen(false)}>Contact</li>
          </ul>

        </nav>
      </div>
    </div>
  );
};

export default Header;
