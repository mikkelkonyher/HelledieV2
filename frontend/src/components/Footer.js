import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Facebook, Instagram, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.linkedin.com/in/helledie/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/ole_helledie/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/helledie/', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-light tracking-wider">DJ Ole Helledie</h3>
            <p className="text-gray-300 font-light text-lg leading-relaxed">
              {t('brandTagline')}
            </p>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              {t('brandDescription')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-light tracking-wide">{t('contactInfo')}</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} />
                <span className="font-light">DJ@helledie.dk</span>
              </div>
            </div>
            <p className="text-gray-400 font-light text-sm">{t('connectWith')}</p>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-light tracking-wide">{t('followMe')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors p-3 rounded-full hover:bg-gray-800 group"
                    aria-label={social.label}
                  >
                    <Icon size={22} className="group-hover:scale-110 transition-transform duration-200" />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-400 font-light text-sm">
              {t('connectExplore')}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-gray-400 font-light text-sm text-center">
                  © {new Date().getFullYear()} DJ Ole Helledie. {t('allRightsReserved')}.
              </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;