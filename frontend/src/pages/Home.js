import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { ArrowRight, Music, Users, Calendar } from 'lucide-react';

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
            alt="DJ Ole Helledie"
            className="w-full h-full object-cover"
          />
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
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-2 border-white/50 text-white px-8 py-4 text-lg font-light transition-all duration-300"
            >
              <a href="mailto:ole@olehelledie.dk" className="flex items-center">
                Get in Touch
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white/80 hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-light transition-all duration-300"
            >
              <Link to="/gallery" className="flex items-center">
                {t('exploreMusic')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Music className="text-indigo-600" size={36} />
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
                <Users className="text-rose-600" size={36} />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                Crowd Reading
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Reading the room's energy and responding with music that moves both body and soul, creating shared moments
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="text-emerald-600" size={36} />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                Professional Service
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Reliable, well-prepared, and dedicated to making every event memorable through thoughtful music curation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Split Image Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1578185544327-68fca190b2da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxESiUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc1NjEzMDQ5N3ww&ixlib=rb-4.1.0&q=85"
                alt="DJ Performance"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-light text-gray-900 tracking-wide">
                Every Event Has Its Story
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                DJ Ole Helledie brings together the art of musical curation with the craft of reading a room. Through years of experience behind the decks, he has developed an intuitive understanding of how music can transform spaces and connect people.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-light transition-all duration-300 hover:scale-105 rounded-full"
                >
                  <a href="mailto:ole@olehelledie.dk" className="flex items-center">
                    Get in Touch
                    <ArrowRight className="ml-3" size={20} />
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-indigo-300 text-indigo-600 hover:bg-indigo-50 px-8 py-3 text-lg font-light transition-all duration-300 rounded-full"
                >
                  <Link to="/about" className="flex items-center">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;