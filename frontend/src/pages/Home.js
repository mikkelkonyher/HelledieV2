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
            alt="DJ Equipment"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              <Link to="/about" className="flex items-center">
                {t('learnMore')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional DJ Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating unforgettable musical experiences for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Professional Equipment
              </h3>
              <p className="text-gray-600">
                State-of-the-art sound systems and DJ equipment for crystal clear audio quality
              </p>
            </div>

            <div className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Crowd Reading
              </h3>
              <p className="text-gray-600">
                Expert ability to read the crowd and adapt music selection for maximum engagement
              </p>
            </div>

            <div className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Flexible Booking
              </h3>
              <p className="text-gray-600">
                Available for weddings, corporate events, private parties, and special occasions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;