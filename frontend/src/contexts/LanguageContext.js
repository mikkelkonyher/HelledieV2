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
      heroTitle: 'Ole Helledie',
      heroSubtitle: 'Sound Artist & Musical Storyteller',
      exploreMusic: 'Explore Music',
      discoverMore: 'Discover More',
      
      // About page
      aboutTitle: 'About Ole',
      aboutBio: 'Ole Helledie crafts sonic journeys that transcend ordinary listening experiences. Through the delicate art of musical curation and live mixing, he weaves together sounds that speak to the soul. Each performance is a unique narrative, born from the energy of the moment and the collective heartbeat of those present.',
      
      // Gallery
      galleryTitle: 'Visual Stories',
      gallerySubtitle: 'Moments captured in light and sound',
      
      // Links
      linksTitle: 'Artistic Circle',
      motherArt: 'Mother\'s Art Gallery',
      daughterDj: 'Daughter\'s Musical Journey',
      
      // Footer
      contactInfo: 'Get in Touch',
      connectWith: 'Connect for musical collaborations',
      followMe: 'Follow the Journey',
      allRightsReserved: 'All rights reserved',
    },
    da: {
      // Navigation
      home: 'Hjem',
      about: 'Om Ole',
      gallery: 'Galleri',
      links: 'Links',
      
      // Home page
      heroTitle: 'Ole Helledie',
      heroSubtitle: 'Lydkunstner & Musikalsk Fortæller',
      exploreMusic: 'Udforsk Musik',
      discoverMore: 'Oplev Mere',
      
      // About page
      aboutTitle: 'Om Ole',
      aboutBio: 'Ole Helledie skaber lydrejser, der transcenderer almindelige lytteoplevelser. Gennem den delikate kunst at kuratere og mixe live musik væver han lyde sammen, der taler til sjælen. Hver optræden er en unik fortælling, født af øjeblikkets energi og de tilstedeværendes kollektive hjerteslag.',
      
      // Gallery
      galleryTitle: 'Visuelle Fortællinger',
      gallerySubtitle: 'Øjeblikke fanget i lys og lyd',
      
      // Links
      linksTitle: 'Kunstnerisk Kreds',
      motherArt: 'Mors Kunstgalleri',
      daughterDj: 'Datterens Musikalske Rejse',
      
      // Footer
      contactInfo: 'Kom i Kontakt',
      connectWith: 'Forbind dig for musikalske samarbejder',
      followMe: 'Følg Rejsen',
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