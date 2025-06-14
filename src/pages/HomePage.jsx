import React, { useState } from 'react';

import bali_img from '../assets/premium_photo-1677829177642-30def98b0963.avif';
import cultural_img from '../assets/photo-1727341856911-1c540bedfbb1.avif';

import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Star,
  Heart,
  Play,
  ChevronLeft,
  ChevronRight,
  // Search, // These are now handled within Navbar.jsx for its own display logic
  // Menu,   // These are now handled within Navbar.jsx for its own display logic
  // User,   // These are now handled within Navbar.jsx for its own display logic
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';


import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TopDestinations from '../components/TopDestinations';
import TopCategories from '../components/TopCategories';

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
 
  const destinations = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      title: "Santorini, Greece",
      price: "$1,299",
      duration: "7 days",
      rating: 4.8,
      reviews: 124,
      badge: "BEST"
    },
    {
      id: 2,
      image: bali_img,
      title: "Bali, Indonesia",
      price: "$899",
      duration: "5 days",
      rating: 4.9,
      reviews: 89,
      badge: "SALE"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      title: "Sydney, Australia",
      price: "$1,599",
      duration: "10 days",
      rating: 4.7,
      reviews: 156,
      badge: ""
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1534008757030-27299c4371b6?w=400&h=300&fit=crop",
      title: "Maldives",
      price: "$2,199",
      duration: "6 days",
      rating: 4.9,
      reviews: 201,
      badge: "HOT"
    }
  ];

  const categories = [
    {
      title: "Beach",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=150&fit=crop",
      color: "bg-blue-100"
    },
    {
      title: "City",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=150&fit=crop",
      color: "bg-gray-100"
    },
    {
      title: "Adventure",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=200&h=150&fit=crop",
      color: "bg-green-100"
    },
    {
      title: "Cultural",
      image: cultural_img,
      color: "bg-orange-100"
    },
    {
      title: "Romantic",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=200&h=150&fit=crop",
      color: "bg-pink-100"
    }
  ];

  const featuredTours = [
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      title: "Santorini Sunset Tour",
      price: "$149.00",
      rating: 4.8,
      duration: "3 hours"
    },
    {
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d93d45?w=300&h=200&fit=crop",
      title: "Bali Temple Adventure",
      price: "$89.00",
      rating: 4.9,
      duration: "Full day"
    },
    {
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop",
      title: "Sydney Harbor Cruise",
      price: "$199.00",
      rating: 4.7,
      duration: "4 hours"
    },
    {
      image: "https://images.unsplash.com/photo-1534008757030-27299c4371b6?w=300&h=200&fit=crop",
      title: "Maldives Snorkeling",
      price: "$299.00",
      rating: 4.9,
      duration: "Half day"
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop",
      title: "Mountain Hiking Tour",
      price: "$129.00",
      rating: 4.6,
      duration: "6 hours"
    },
    {
      image: "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=300&h=200&fit=crop",
      title: "Desert Safari Experience",
      price: "$179.00",
      rating: 4.8,
      duration: "Full day"
    },
    {
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop",
      title: "City Walking Tour",
      price: "$59.00",
      rating: 4.5,
      duration: "2 hours"
    },
    {
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=300&h=200&fit=crop",
      title: "Romantic Dinner Cruise",
      price: "$249.00",
      rating: 4.9,
      duration: "3 hours"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b515?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      text: "Amazing experience! The trip to Santorini was perfectly organized. Every detail was taken care of and the local guides were incredible. Highly recommend Nomad Planner!"
    },
    {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      text: "Best travel planning service I've ever used. They helped me plan a 3-week trip across Southeast Asia and everything went smoothly. Professional and reliable!"
    }
  ];

  const newsArticles = [
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      title: "Best Greek islands to visit",
      excerpt: "Discover the most beautiful Greek islands for your next Mediterranean adventure.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b515?w=40&h=40&fit=crop&crop=face"
    },
    {
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d93d45?w=300&h=200&fit=crop",
      title: "Ultimate Bali travel guide",
      excerpt: "Everything you need to know about planning your perfect Bali vacation.",
      author: "Mike Chen",
      date: "March 12, 2024",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop",
      title: "Sydney's hidden gems",
      excerpt: "Explore the lesser-known attractions and local favorites in Sydney.",
      author: "Emma Davis",
      date: "March 10, 2024",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
    

      {/* Hero Section */}
      <HeroSection/>

      {/* Top Destinations */}
      <TopDestinations destinations={destinations} />

      {/* Top Categories */}
      <TopCategories categories={categories} />

      {/* Why Choose Nomad Planner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Nomad Planner
              </h2>
              <p className="text-gray-600 mb-8">
                We are a passionate team of travel professionals dedicated to creating unforgettable journeys. We believe travel should be an adventure, not a hassle.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 rounded-full p-2 mt-1">
                    <MapPin className="h-5 w-5 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Local Guides</h3>
                    <p className="text-gray-600">Connect with knowledgeable locals who know the best spots.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 rounded-full p-2 mt-1">
                    <Calendar className="h-5 w-5 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Flexible Booking</h3>
                    <p className="text-gray-600">Book with confidence with our flexible cancellation policy.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 rounded-full p-2 mt-1">
                    <Users className="h-5 w-5 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Our dedicated support team is always here to help.</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors">
                Learn More
              </button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=500&fit=crop"
                alt="Travel experience"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-500">$500</div>
                  <div className="text-sm text-gray-500">Average Savings</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-500">500K</div>
                  <div className="text-sm text-gray-500">Happy Travelers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Tours for you</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTours.map((tour, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <Heart className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{tour.title}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-rose-500">{tour.price}</span>
                    <span className="text-sm text-gray-500">{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{tour.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors">
              View All Destinations
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Love from our Clients</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setActiveTestimonial(activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1)}
                className="p-2 border border-gray-300 rounded-full hover:bg-gray-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                    <div className="flex">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonials[activeTestimonial].text}"</p>
              </div>

              <button
                onClick={() => setActiveTestimonial(activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1)}
                className="p-2 border border-gray-300 rounded-full hover:bg-gray-50"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === activeTestimonial ? 'bg-rose-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Latest News Update</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={article.avatar}
                        alt={article.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{article.author}</div>
                        <div className="text-xs text-gray-500">{article.date}</div>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors">
              View All News
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">Trip Planner</h3>
              <p className="text-sm text-gray-300">Your one-stop solution for all travel needs.</p> {/* Added text-gray-300 */}
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a>
            </div>
          </div>
          {/* Optional: Add social media icons to footer */}
          <div className="flex justify-center md:justify-end space-x-6 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><Youtube className="h-6 w-6" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;