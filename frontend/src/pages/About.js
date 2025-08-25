import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { ArrowRight, Music2, Award, Heart } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t('aboutTitle')}
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1692176548571-86138128e36c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxESiUyMG11c2ljfGVufDB8fHx8MTc1NjEyNzgyMnww&ixlib=rb-4.1.0&q=85"
              alt="DJ Ole Helledie"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('aboutBio')}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Music2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Musical Versatility</h4>
                  <p className="text-gray-600">From electronic beats to classic hits, adapting to any audience and venue</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Award className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Excellence</h4>
                  <p className="text-gray-600">Committed to delivering high-quality performances with reliable service</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Heart className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Passion for Music</h4>
                  <p className="text-gray-600">Genuine love for music that translates into memorable experiences</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <a href="#booking" className="flex items-center">
                  {t('bookNow')}
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;