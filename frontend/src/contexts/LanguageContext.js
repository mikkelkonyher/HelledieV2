import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      // Navigation
      home: 'Home',
      about: 'About',
      gallery: 'Gallery',
      links: 'Links',
      
      // Home page
      heroTitle: 'DJ Ole Helledie',
      heroSubtitle: 'Professional DJ & Music Producer',
      bookNow: 'Book Now',
      learnMore: 'Learn More',
      
      // About page
      aboutTitle: 'About Ole',
      aboutBio: 'Ole Helledie is a passionate DJ and music producer with years of experience in creating unforgettable musical experiences. Known for his unique style and ability to read the crowd, Ole brings energy and professionalism to every event. From intimate gatherings to large-scale celebrations, he crafts the perfect soundtrack for any occasion.',
      
      // Gallery
      galleryTitle: 'Gallery',
      gallerySubtitle: 'Moments from performances and events',
      
      // Links
      linksTitle: 'Family & Friends',
      motherArt: 'Mother\'s Art Gallery',
      daughterDj: 'Daughter\'s DJ Page',
      
      // Footer
      contactInfo: 'Contact Information',
      bookingInquiries: 'For booking inquiries',
      followMe: 'Follow Me',
      allRightsReserved: 'All rights reserved',
    },
    da: {
      // Navigation
      home: 'Hjem',
      about: 'Om Ole',
      gallery: 'Galleri',
      links: 'Links',
      
      // Home page
      heroTitle: 'DJ Ole Helledie',
      heroSubtitle: 'Professionel DJ & Musikproducent',
      bookNow: 'Book Nu',
      learnMore: 'Læs Mere',
      
      // About page
      aboutTitle: 'Om Ole',
      aboutBio: 'Ole Helledie er en passioneret DJ og musikproducent med års erfaring i at skabe uforglemmelige musikalske oplevelser. Kendt for sin unikke stil og evne til at læse publikum, bringer Ole energi og professionalisme til enhver begivenhed. Fra intime sammenkomster til store fester skaber han det perfekte soundtrack til enhver lejlighed.',
      
      // Gallery
      galleryTitle: 'Galleri',
      gallerySubtitle: 'Øjeblikke fra koncerter og begivenheder',
      
      // Links
      linksTitle: 'Familie & Venner',
      motherArt: 'Mors Kunstgalleri',
      daughterDj: 'Datterens DJ Side',
      
      // Footer
      contactInfo: 'Kontaktinformation',
      bookingInquiries: 'For booking forespørgsler',
      followMe: 'Følg Mig',
      allRightsReserved: 'Alle rettigheder forbeholdes',
    }
  };

  const t = (key) => translations[language][key] || key;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'da' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};