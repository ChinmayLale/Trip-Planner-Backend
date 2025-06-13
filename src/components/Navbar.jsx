import { MapPin } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false); // State to control the visibility of the nav bar

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div>
        <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <MapPin className="h-8 w-8 text-black" />
                <span className="ml-2 text-xl font-bold text-gray-900">TRAVEL BUDDY</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-gray-700  hover:underline transition font-medium text-lg">Home</a>
          <a href="#" className="text-gray-700 hover:underline transition font-medium text-lg">Packages</a>
          <a href="#" className="text-gray-700 hover:underline transition font-medium text-lg">About Us</a>
          <a href="#" className="text-gray-700 hover:underline transition font-medium text-lg">Contact</a>
        </nav>
           

      {/* Overlay to close nav when clicking outside (optional but good UX) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleNav}
        ></div>
      )}

      {/* Mobile Navigation Bar */}
      <nav
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          w-64 sm:w-80 // Adjust width as needed for different screen sizes
          grid grid-cols-1 items-start p-4 space-y-4`} // Changed space-x-8 to space-y-4 for vertical stacking
      >
        {/* Close button inside the nav bar (optional) */}
        <button
          onClick={toggleNav}
          className="absolute top-4 right-4 text-gray-700 hover:text-black focus:outline-none"
          aria-label="Close navigation"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mt-12 flex flex-col space-y-4"> {/* Added a div for better spacing of links */}
          <a href="#" className="text-gray-700 hover:underline transition font-medium text-lg">Home</a>
          <a href="#" className="text-gray-700 hover:underline transition font-medium text-lg">Packages</a>
          <a href="#" className="text-gray-700 hover:underline transition font-medium text-lg">About Us</a>
          <a href="#" className="text-gray-700 hover:underline transition font-medium text-lg">Contact</a>
        </div>
      </nav>

            {/* Auth buttons */}
            <div className="flex items-center space-x-1 gap-2">
              <Link to='/login' className="text-gray-700 font-medium">Login</Link>
              <Link to='/register' className="bg-black text-white px-2 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                Sign Up
              </Link>
               <button
        onClick={toggleNav}
        className="lg:hidden p-4 focus:outline-none z-50" // z-50 to ensure it's above the nav bar
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        {/* You can use an actual SVG icon here for better accessibility and styling */}
        <div className="space-y-2">
          <span className={`block h-0.5 w-8 bg-gray-700 transition-transform duration-300 ${isOpen ? 'hidden' : ''}`}></span>
          <span className={`block h-0.5 w-8 bg-gray-700 transition-opacity duration-300 ${isOpen ? 'hidden' : ''}`}></span>
          <span className={`block h-0.5 w-8 bg-gray-700 transition-transform duration-300 ${isOpen ? 'hidden' : ''}`}></span>
        </div>
      </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar