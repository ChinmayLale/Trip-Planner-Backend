import { MapPin } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Assuming you use Redux for logout
import { logout } from '../Redux/slices/authSlice';

const Navbar = ({ user, token }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null); // Ref for the profile dropdown
  const dispatch = useDispatch(); // Initialize useDispatch

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileRef]);

  useEffect(() => {
    // Check if user is logged in and has a token
    if (token) {
      // You can add any logic here that needs to run when the app loads
      console.log("User is logged in:", user);
    } else {
      console.log("User is not logged in");
    }
  }
  , [user, token]); // Dependency array to run effect when user or token changes



  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    setProfileOpen(false); // Close profile dropdown after logout
    setMenuOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="bg-white shadow-md px-4 py-2 flex items-center justify-between relative z-50">
      {/* Logo and Site Title */}
      <Link to={"/"} className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <MapPin className="text-blue-600" />
        <span className="font-bold text-lg">Trip Planner</span>
      </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/" className="hover:text-blue-600 transition-colors duration-200">
          Home
        </Link>
        <Link to="/destinations" className="hover:text-blue-600 transition-colors duration-200">
          Destinations
        </Link>
        <Link to="/about" className="hover:text-blue-600 transition-colors duration-200">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-blue-600 transition-colors duration-200">
          Contact Us
        </Link>

        {/* Conditional rendering for user authentication */}
        {token ? (
          <div className="relative" ref={profileRef}>
            <img
              src={user?.avatar || 'https://i.pravatar.cc/32'}
              alt="profile"
              className="w-8 h-8 rounded-full cursor-pointer object-cover"
              onClick={() => setProfileOpen(!profileOpen)} // Toggle on click
            />
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-10 animate-fade-in">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setProfileOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/login"
              className="px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-1 border border-blue-600 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              Signup
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <button
        className="md:hidden flex flex-col gap-1 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            menuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            menuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            menuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        ></span>
      </button>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-4 px-4 py-4 md:hidden z-40 animate-slide-down">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/destinations"
            className="hover:text-blue-600 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Destinations
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-600 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          {token ? (
            <div className="flex flex-col gap-2 border-t pt-4 mt-4 border-gray-200">
              <Link
                to="/dashboard"
                className="hover:text-blue-600 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="text-left hover:text-blue-600 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 border-t pt-4 mt-4 border-gray-200">
              <Link
                to="/login"
                className="px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors duration-200 text-center"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-1 border border-blue-600 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 text-center"
                onClick={() => setMenuOpen(false)}
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;