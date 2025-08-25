import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Mail, ArrowRight, Music2, Award, Heart } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-light text-gray-900 mb-8 tracking-wider">
            {t('aboutTitle')}
          </h1>
          <div className="w-24 h-px bg-indigo-400 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1692176548571-86138128e36c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxESiUyMG11c2ljfGVufDB8fHx8MTc1NjEyNzgyMnww&ixlib=rb-4.1.0&q=85"
              alt="DJ Ole Helledie"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              {t('aboutBio')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-3 rounded-full">
                  <Music2 className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Musical Versatility</h4>
                  <p className="text-gray-600 font-light">Seamlessly blending genres from electronic and house to classic hits, adapting to any crowd and setting</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-3 rounded-full">
                  <Award className="text-rose-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Event Experience</h4>
                  <p className="text-gray-600 font-light">Years of experience DJing weddings, corporate events, private parties, and cultural celebrations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-full">
                  <Heart className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Professional Approach</h4>
                  <p className="text-gray-600 font-light">Reliable, well-prepared, and dedicated to making every event memorable through thoughtful music curation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center tracking-wide">
            Music & Moments
          </h2>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl text-gray-700 italic font-light leading-relaxed text-center">
              "Every event tells a story, and music is its most powerful narrator. My role as a DJ is to listen deeply - to the hosts, to the guests, to the energy in the room - and respond with a soundtrack that elevates the experience from ordinary to extraordinary."
            </blockquote>
            <div className="text-center mt-8">
              <div className="w-16 h-px bg-indigo-300 mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Event Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">Celebrations & Weddings</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Creating the perfect atmosphere for life's most precious moments, from ceremony elegance to reception energy.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">Corporate & Cultural Events</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Professional event curation for conferences, launches, exhibitions, and cultural celebrations.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
            Let's Create Your Event's Soundtrack
          </h3>
          <p className="text-gray-600 mb-8 font-light max-w-2xl mx-auto">
            Available for events throughout Denmark and beyond. Let's discuss how we can make your celebration unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-light transition-all duration-300 hover:scale-105 rounded-full"
            >
              <a href="mailto:ole@olehelledie.dk" className="flex items-center">
                <Mail className="mr-3" size={20} />
                Get in Touch
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="border-2 border-indigo-300 text-indigo-600 hover:bg-indigo-50 px-8 py-3 text-lg font-light transition-all duration-300 rounded-full"
            >
              <Link to="/gallery" className="flex items-center">
                View Gallery
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;