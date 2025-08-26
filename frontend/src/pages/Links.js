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
      description: t('motherArtDesc'),
      url: '#',
      icon: Palette,
      gradient: 'from-rose-400 to-pink-500'
    },
    {
      id: 2,
      title: t('daughterDj'),
      description: t('daughterDjDesc'),
      url: '#',
      icon: Music,
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-light text-gray-900 mb-8 tracking-wider">
            {t('linksTitle')}
          </h1>
          <p className="text-xl text-gray-600 font-light">
            {t('artConnectsBody')}
          </p>
          <div className="w-24 h-px bg-indigo-400 mx-auto mt-8"></div>
        </div>

        {/* Links */}
        <div className="space-y-12 mb-20">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <div
                key={link.id}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/50"
              >
                <div className="p-10 md:p-12">
                  <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${link.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-light text-gray-900 mb-3 tracking-wide">
                          {link.title}
                        </h3>
                        <p className="text-gray-600 font-light text-lg leading-relaxed max-w-md">
                          {link.description}
                        </p>
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 transition-all duration-300 group-hover:scale-105 rounded-full"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3"
                      >
                        <span className="font-light">{t('explore')}</span>
                        <ExternalLink size={18} />
                      </a>
                    </Button>
                  </div>
                </div>
                <div className={`h-1 bg-gradient-to-r ${link.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Artistic Statement */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-12 text-center border border-white/50">
          <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-wide">
            {t('artConnectsTitle')}
          </h2>
          <p className="text-gray-600 font-light text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            {t('artConnectsBody')}
          </p>
          <div className="w-16 h-px bg-indigo-300 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Links;