import React from 'react'

const TopCategories = ({categories}) => {
  return (
    <section className="py-20 bg-[#fff6fd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From adventurous treks to cultural immersions, we've got you covered. It's
              time to explore the world on your own terms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"> {/* Adjusted for 5 columns on large screens */}
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden pb-4">
                {/* Image container for the semi-circle effect */}
                <div className="w-full h-32 relative mb-4"> {/* Fixed height for the image area */}
                  <img
                    src={category.image}
                    alt={category.title}
                    // Apply custom class for the semi-circle effect
                    className="w-full h-full object-cover custom-category-img group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Optional: Overlay a slight gradient if desired, or just use the base color */}
                  <div className={`absolute inset-0 rounded-t-xl opacity-20 ${category.color}`}></div>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg ">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
             
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default TopCategories