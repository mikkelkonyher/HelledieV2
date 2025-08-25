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
      heroSubtitle: 'Musical Storyteller & Event Curator',
      exploreMusic: 'Explore Music',
      discoverMore: 'Discover More',
      
      // About page
      aboutTitle: 'About Ole',
      aboutBio: 'DJ Ole Helledie brings together the art of musical curation with the craft of reading a room. Through years of experience behind the decks, he has developed an intuitive understanding of how music can transform spaces and connect people. Each event becomes a collaborative experience, where the energy of the crowd guides the musical journey from the first track to the last.',
      
      // Gallery
      galleryTitle: 'Visual Stories',
      gallerySubtitle: 'Moments captured in light and sound',
      
      // Links
      linksTitle: 'Artistic Circle',
      motherArt: 'Mother\'s Art Gallery',
      daughterDj: 'Daughter\'s Musical Journey',
      
      // Footer
      contactInfo: 'Get in Touch',
      connectWith: 'Available for events and collaborations',
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
      heroTitle: 'DJ Ole Helledie',
      heroSubtitle: 'Musikalsk Fortæller & Event Kurator',
      exploreMusic: 'Udforsk Musik',
      discoverMore: 'Oplev Mere',
      
      // About page
      aboutTitle: 'Om Ole',
      aboutBio: 'DJ Ole Helledie bringer musikens kurateringskunst sammen med håndværket at læse et rum. Gennem års erfaring bag pladespillerne har han udviklet en intuitiv forståelse af, hvordan musik kan transformere rum og forbinde mennesker. Hver begivenhed bliver til en kollaborativ oplevelse, hvor publikums energi styrer den musikalske rejse fra første til sidste track.',
      
      // Gallery
      galleryTitle: 'Visuelle Fortællinger',
      gallerySubtitle: 'Øjeblikke fanget i lys og lyd',
      
      // Links
      linksTitle: 'Kunstnerisk Kreds',
      motherArt: 'Mors Kunstgalleri',
      daughterDj: 'Datterens Musikalske Rejse',
      
      // Footer
      contactInfo: 'Kom i Kontakt',
      connectWith: 'Tilgængelig for begivenheder og samarbejder',
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