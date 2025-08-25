import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Image Section */}
      <section className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1692176548571-86138128e36c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxESiUyMG11c2ljfGVufDB8fHx8MTc1NjEyNzgyMnww&ixlib=rb-4.1.0&q=85"
          alt="DJ Ole Helledie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-6xl font-light text-white tracking-wider">
            {t('aboutTitle')}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1698153777736-2d6d8fd34e47?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxESiUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc1NjEzMDQ5N3ww&ixlib=rb-4.1.0&q=85"
                alt="Event Atmosphere"
                className="rounded-lg shadow-2xl w-full h-80 object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                {t('aboutBio')}
              </p>
              
              <Button
                asChild
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-light transition-all duration-300 hover:scale-105 rounded-full"
              >
                <a href="mailto:ole@olehelledie.dk" className="flex items-center">
                  <Mail className="mr-3" size={20} />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Grid */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 h-96">
          <div className="relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f29b1fe122?w=800&auto=format&fit=crop&q=60"
              alt="Wedding Events"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="text-white p-8">
                <h3 className="text-3xl font-light mb-4">Weddings & Celebrations</h3>
                <p className="text-gray-200 font-light text-lg">
                  Creating perfect atmospheres for life's most precious moments
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=60"
              alt="Corporate Events"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="text-white p-8">
                <h3 className="text-3xl font-light mb-4">Corporate & Cultural</h3>
                <p className="text-gray-200 font-light text-lg">
                  Professional curation for conferences, launches, and cultural events
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section with Background */}
      <section className="relative py-32">
        <img
          src="https://images.unsplash.com/photo-1578185544327-68fca190b2da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxESiUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc1NjEzMDQ5N3ww&ixlib=rb-4.1.0&q=85"
          alt="DJ Performance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <blockquote className="text-2xl md:text-3xl text-white italic font-light leading-relaxed">
            "Every event tells a story, and music is its most powerful narrator."
          </blockquote>
          <div className="w-24 h-px bg-white/50 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-8 tracking-wide">
            Let's Create Your Event's Soundtrack
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Available throughout Denmark and beyond. Let's discuss how we can make your celebration unforgettable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-light transition-all duration-300 hover:scale-105 rounded-full"
            >
              <a href="mailto:ole@olehelledie.dk" className="flex items-center">
                Get in Touch
                <ArrowRight className="ml-3" size={20} />
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="border-2 border-indigo-300 text-indigo-600 hover:bg-indigo-50 px-12 py-4 text-lg font-light transition-all duration-300 rounded-full"
            >
              <Link to="/gallery" className="flex items-center">
                View Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;