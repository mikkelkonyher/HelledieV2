import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { ExternalLink, Palette, Music } from 'lucide-react';

const Links = () => {
  const { t } = useLanguage();

  const links = [
    {
      id: 1,
      title: t('motherArt'),
      description: 'Explore beautiful artworks and creative expressions',
      url: '#',
      icon: Palette,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      title: t('daughterDj'),
      description: 'Discover the next generation of DJ talent',
      url: '#',
      icon: Music,
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t('linksTitle')}
          </h1>
          <p className="text-xl text-gray-600">
            Discover the talented people in Ole's family
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <div
                key={link.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${link.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {link.title}
                        </h3>
                        <p className="text-gray-600">
                          {link.description}
                        </p>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 transition-all duration-300 group-hover:scale-105"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <span>Visit</span>
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
                <div className={`h-1 bg-gradient-to-r ${link.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Booking CTA */}
        <div className="mt-16 text-center bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Book Ole for Your Event?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Professional DJ services for weddings, corporate events, private parties, and special occasions.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <a href="#booking" className="flex items-center">
              Book Now
              <ExternalLink className="ml-2" size={20} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Links;