import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Mail, Music2, Palette, Compass } from 'lucide-react';

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
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1692176548571-86138128e36c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxESiUyMG11c2ljfGVufDB8fHx8MTc1NjEyNzgyMnww&ixlib=rb-4.1.0&q=85"
              alt="Ole Helledie"
              className="rounded-lg shadow-2xl w-full transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed font-light">
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
                  <Palette className="text-rose-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Event Experience</h4>
                  <p className="text-gray-600 font-light">Years of experience DJing weddings, corporate events, private parties, and cultural celebrations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-full">
                  <Compass className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Professional Approach</h4>
                  <p className="text-gray-600 font-light">Reliable, well-prepared, and dedicated to making every event memorable through thoughtful music curation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
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

        {/* Event Types Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">Celebrations & Weddings</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Creating the perfect atmosphere for life's most precious moments, from ceremony elegance to reception energy.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">Corporate & Cultural Events</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Professional event curation for conferences, launches, exhibitions, and cultural celebrations.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
            Connect & Collaborate
          </h3>
          <p className="text-gray-600 mb-8 font-light max-w-2xl mx-auto">
            Interested in creating something beautiful together? Let's explore the possibilities of sound and space.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-light transition-all duration-300 hover:scale-105 rounded-full"
          >
            <a href="mailto:ole@djolehelledie.dk" className="flex items-center">
              <Mail className="mr-3" size={20} />
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;