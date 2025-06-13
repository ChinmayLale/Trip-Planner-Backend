import React from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, CurrencyIcon } from 'lucide-react';

export default function HeroSection() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-200 via-purple-100 to-pink-100 px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="max-w-2xl text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4 sm:mb-6">
              Your Nomad Journey,<br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>Organized
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Effortlessly plan your journeys with<br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>NomadPlanner, the ultimate tool for digital<br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>nomads
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <span className="text-gray-700 text-sm sm:text-base">Opera House Sydney</span>
              <div className="flex space-x-2">
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-400 flex items-center justify-center hover:bg-gray-100">
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-400 flex items-center justify-center hover:bg-gray-100">
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-auto">
            <div className="w-full max-w-sm sm:max-w-md lg:w-96 h-48 sm:h-64 lg:h-80 bg-gray-300 rounded-lg overflow-hidden mx-auto">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-16 h-12 sm:w-24 sm:h-16 lg:w-32 lg:h-24 bg-white rounded-lg mx-auto mb-2 sm:mb-4 shadow-lg transform -rotate-12"></div>
                  <div className="w-14 h-10 sm:w-20 sm:h-14 lg:w-28 lg:h-20 bg-white rounded-lg mx-auto mb-2 sm:mb-4 shadow-lg transform rotate-6"></div>
                  <div className="w-18 h-14 sm:w-28 sm:h-20 lg:w-36 lg:h-28 bg-white rounded-lg mx-auto shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white px-4 sm:px-6 py-6 sm:py-8 -mt-4 sm:-mt-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Destination Input */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  <span className="text-gray-800 font-medium text-sm sm:text-base">Destination</span>
                </div>
                <input
                  type="text"
                  placeholder="Where you want to go?"
                  className="w-full text-gray-600 text-base sm:text-lg placeholder-gray-400 border-none outline-none"
                />
              </div>

              {/* Date Input */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  <span className="text-gray-800 font-medium text-sm sm:text-base">Date</span>
                </div>
                <input
                  type="text"
                  placeholder="Select your travel date"
                  className="w-full text-gray-600 text-base sm:text-lg placeholder-gray-400 border-none outline-none"
                />
                
              </div>
             
             
             {/* Budget Input */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <CurrencyIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  <span className="text-gray-800 font-medium text-sm sm:text-base">Budget</span>
                </div>
                <input
                  type="text"
                  placeholder="What's your budget?"
                  className="w-full text-gray-600 text-base sm:text-lg placeholder-gray-400 border-none outline-none"
                />
              </div>

              {/* Search Button */}
              <button className="w-full lg:w-auto bg-black text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium text-base sm:text-lg hover:bg-gray-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}