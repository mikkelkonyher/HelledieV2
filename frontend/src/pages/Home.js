import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { ArrowRight, Headphones, Heart, Waves } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxESiUyMG11c2ljfGVufDB8fHx8MTc1NjEyNzgyMnww&ixlib=rb-4.1.0&q=85"
            alt="Musical Atmosphere"
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-thin mb-6 animate-fade-in tracking-wider">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 font-light tracking-wide">
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/70 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-light transition-all duration-300"
            >
              <Link to="/gallery" className="flex items-center">
                {t('exploreMusic')}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/40 text-white/80 hover:bg-white/5 backdrop-blur-sm px-8 py-4 text-lg font-light transition-all duration-300"
            >
              <Link to="/about" className="flex items-center">
                {t('discoverMore')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Artistic Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">
              Creating Musical Experiences
            </h2>
            <div className="w-24 h-px bg-indigo-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              From intimate celebrations to grand gatherings, every event deserves a soundtrack that reflects its unique spirit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="text-indigo-600" size={36} />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                Event Curation
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Crafting the perfect atmosphere for weddings, corporate events, private parties, and cultural celebrations
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-rose-600" size={36} />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                Intuitive Connection
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Reading the room's energy and responding with music that moves both body and soul, creating shared moments
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Waves className="text-emerald-600" size={36} />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                Musical Journey
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Weaving together genres and eras to create seamless flows that honor both the music and the moment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-8 tracking-wide">
            Join the Journey
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
            Step into a world where music becomes meditation, where rhythm becomes ritual, and where every gathering transforms into a celebration of the human spirit through sound.
          </p>
          
          <div className="flex justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-light transition-all duration-300 hover:scale-105 rounded-full"
            >
              <Link to="/about" className="flex items-center">
                Discover the Story
                <ArrowRight className="ml-3" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;