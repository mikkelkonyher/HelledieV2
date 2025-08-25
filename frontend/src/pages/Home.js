import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

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
                <Play className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-3 h-96">
          <div className="relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1578185544327-68fca190b2da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxESiUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc1NjEzMDQ5N3ww&ixlib=rb-4.1.0&q=85"
              alt="DJ Performance"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="text-white p-8">
                <h3 className="text-2xl font-light mb-2">Live Performance</h3>
                <p className="text-gray-200 font-light">Creating moments that move</p>
              </div>
            </div>
          </div>
          
          <div className="relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1698153763051-06fcad199e24?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxESiUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc1NjEzMDQ5N3ww&ixlib=rb-4.1.0&q=85"
              alt="Event Atmosphere"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="text-white p-8">
                <h3 className="text-2xl font-light mb-2">Event Curation</h3>
                <p className="text-gray-200 font-light">Crafting perfect atmospheres</p>
              </div>
            </div>
          </div>
          
          <div className="relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1698153771636-a56f5656a60f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxESiUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc1NjEzMDQ5N3ww&ixlib=rb-4.1.0&q=85"
              alt="Professional Setup"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="text-white p-8">
                <h3 className="text-2xl font-light mb-2">Professional Sound</h3>
                <p className="text-gray-200 font-light">Quality you can feel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            <div className="relative h-96 lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1640509724989-d8793574d307?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxtdXNpYyUyMGF0bW9zcGhlcmV8ZW58MHx8fHwxNzU2MTMwNTA0fDA&ixlib=rb-4.1.0&q=85"
                alt="Outdoor Event"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="bg-gray-50 p-12 lg:p-16 h-96 lg:h-[500px] flex flex-col justify-center">
              <h2 className="text-4xl font-light text-gray-900 mb-8 tracking-wide">
                Every Event Has Its Story
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                From intimate celebrations to grand gatherings, the right music transforms moments into memories.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-light transition-all duration-300 hover:scale-105 rounded-full w-fit"
              >
                <Link to="/about" className="flex items-center">
                  Learn More
                  <ArrowRight className="ml-3" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Event Image */}
      <section className="relative h-96">
        <img
          src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg"
          alt="Event Atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-light mb-6 tracking-wide">
              Available for Your Next Event
            </h2>
            <p className="text-xl font-light mb-8 text-gray-200">
              Weddings • Corporate Events • Private Parties • Cultural Celebrations
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-2 border-white/50 text-white px-12 py-4 text-lg font-light transition-all duration-300"
            >
              <a href="mailto:ole@olehelledie.dk" className="flex items-center">
                Let's Create Something Beautiful
                <ArrowRight className="ml-3" size={20} />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;