import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react'
import React from 'react'

const TopDestinations = ({ destinations }) => {
  return (
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Top Destinations for you</h2>
            <div className="flex space-x-2">
              <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
            {destinations.map((dest) => (
              <div key={dest.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {dest.badge && (
                    <span className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${
                      dest.badge === 'BEST' ? 'bg-green-100 text-green-800' :
                      dest.badge === 'SALE' ? 'bg-red-100 text-red-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {dest.badge}
                    </span>
                  )}
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <Heart className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{dest.title}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-black">{dest.price}</span>
                    <span className="text-sm text-gray-500">{dest.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{dest.rating} ({dest.reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  
  )
}

export default TopDestinations