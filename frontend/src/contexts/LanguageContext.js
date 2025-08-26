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
      heroSubtitle: 'DJ & Event Curator',
      exploreMusic: 'Visual vibes',
      discoverMore: 'Discover More',
      servicesTitle: 'Creating Musical Experiences',
      servicesSubtitle: "From intimate celebrations to grand gatherings, every event deserves a soundtrack that reflects its unique spirit",
      eventCurationTitle: 'Event Curation',
      eventCurationBody: 'Crafting the perfect atmosphere for weddings, corporate events, private parties, and cultural celebrations',
      crowdReadingTitle: 'Crowd Reading',
      crowdReadingBody: "Reading the room's energy and responding with music that moves both body and soul, creating shared moments",
      professionalServiceTitle: 'Professional Service',
      professionalServiceBody: 'Reliable, well-prepared, and dedicated to making every event memorable through thoughtful music curation',
      splitEveryEventTitle: 'Every Event Has Its Story',
      splitEveryEventBody: 'DJ Ole Helledie brings together the art of musical curation with the craft of reading a room. Through years of experience behind the decks, he has developed an intuitive understanding of how music can transform spaces and connect people.',
      getInTouch: 'Get in Touch',
      learnMore: 'Learn More',
      
      // About page
      aboutTitle: 'About Ole',
      aboutBio: 'DJ Ole Helledie brings together the art of musical curation with the craft of reading a room. Through years of experience behind the decks, he has developed an intuitive understanding of how music can transform spaces and connect people. Each event becomes a collaborative experience, where the energy of the crowd guides the musical journey from the first track to the last.',
      musicalVersatilityTitle: 'Musical Versatility',
      musicalVersatilityBody: 'Seamlessly blending genres from electronic and house to classic hits, adapting to any crowd and setting',
      eventExperienceTitle: 'Event Experience',
      eventExperienceBody: 'Years of experience DJing weddings, corporate events, private parties, and cultural celebrations',
      professionalApproachTitle: 'Professional Approach',
      professionalApproachBody: 'Reliable, well-prepared, and dedicated to making every event memorable through thoughtful music curation',
      musicAndMomentsTitle: 'Music & Moments',
      musicAndMomentsQuote: 'Every event tells a story, and music is its most powerful narrator. My role as a DJ is to listen deeply - to the hosts, to the guests, to the energy in the room - and respond with a soundtrack that elevates the experience from ordinary to extraordinary.',
      celebrationsWeddingsTitle: 'Celebrations & Weddings',
      celebrationsWeddingsBody: "Creating the perfect atmosphere for life's most precious moments, from ceremony elegance to reception energy.",
      corporateCulturalTitle: 'Corporate & Cultural Events',
      corporateCulturalBody: 'Professional event curation for conferences, launches, exhibitions, and cultural celebrations.',
      contactCtaTitle: "Let's Create Your Event's Soundtrack",
      contactCtaBody: "Available for events throughout Denmark and beyond. Let's discuss how we can make your celebration unforgettable.",
      viewGallery: 'View Gallery',
      
      // Gallery
      galleryTitle: 'Visual Stories',
      gallerySubtitle: 'Moments captured in light and sound',
      gallery1Alt: 'Professional Setup',
      gallery1Caption: 'Professional DJ Setup',
      gallery2Alt: 'Live Performance',
      gallery2Caption: 'Live Performance',
      gallery3Alt: 'Event Atmosphere',
      gallery3Caption: 'Creating Atmosphere',
      gallery4Alt: 'Intimate Setting',
      gallery4Caption: 'Intimate Moments',
      gallery5Alt: 'Outdoor Event',
      gallery5Caption: 'Outdoor Events',
      gallery6Alt: 'DJ Equipment',
      gallery6Caption: 'The Craft',
      
      // Links
      linksTitle: 'Artistic Circle',
      motherArt: 'Lene Helledie Art',
      daughterDj: 'Daughter\'s Musical Journey',
      motherArtDesc: 'A lifetime dedicated to visual storytelling and creative expression',
      daughterDjDesc: 'The evolution continues with fresh perspectives and boundless creativity',
      artConnectsTitle: 'Art Connects Us All',
      artConnectsBody: 'In our family, creativity is the common thread that weaves through generations. Each of us expresses the same universal truths through different mediums - visual art, musical landscapes, and sonic storytelling.',
      explore: 'Explore',
      
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
      heroSubtitle: 'DJ & Eventkurator',
      exploreMusic: 'Visuelle øjeblikke',
      discoverMore: 'Oplev Mere',
      servicesTitle: 'Skaber Musikalske Oplevelser',
      servicesSubtitle: 'Fra intime fejringer til store begivenheder – hvert event fortjener et soundtrack, der afspejler dets unikke ånd',
      eventCurationTitle: 'Eventkuratering',
      eventCurationBody: 'Skaber den perfekte atmosfære til bryllupper, firmaevents, private fester og kulturelle begivenheder',
      crowdReadingTitle: 'At Læse Publikum',
      crowdReadingBody: 'At aflæse rummets energi og svare igen med musik, der bevæger både krop og sjæl – og skaber fælles øjeblikke',
      professionalServiceTitle: 'Professionel Service',
      professionalServiceBody: 'Pålidelig, velforberedt og dedikeret til at gøre hvert event mindeværdigt gennem omtænksom musikalsk kuratering',
      splitEveryEventTitle: 'Hvert Event Har Sin Historie',
      splitEveryEventBody: 'DJ Ole Helledie forener kunstnerisk musikkuratering med håndværket at læse et rum. Gennem års erfaring bag pulten har han udviklet en intuitiv forståelse af, hvordan musik kan forandre rum og forbinde mennesker.',
      getInTouch: 'Kom i Kontakt',
      learnMore: 'Læs Mere',
      
      // About page
      aboutTitle: 'Om Ole',
      aboutBio: 'DJ Ole Helledie bringer musikens kurateringskunst sammen med håndværket at læse et rum. Gennem års erfaring bag pladespillerne har han udviklet en intuitiv forståelse af, hvordan musik kan transformere rum og forbinde mennesker. Hver begivenhed bliver til en kollaborativ oplevelse, hvor publikums energi styrer den musikalske rejse fra første til sidste track.',
      musicalVersatilityTitle: 'Musikalsk Alsidighed',
      musicalVersatilityBody: 'Sømløst at blande genrer fra elektronisk og house til klassiske hits – tilpasset ethvert publikum og enhver ramme',
      eventExperienceTitle: 'Eventerfaring',
      eventExperienceBody: 'Års erfaring med at DJ’e til bryllupper, firmaevents, private fester og kulturelle begivenheder',
      professionalApproachTitle: 'Professionel Tilgang',
      professionalApproachBody: 'Pålidelig, velforberedt og dedikeret til at gøre hvert event mindeværdigt gennem omtænksom musikalsk kuratering',
      musicAndMomentsTitle: 'Musik & Øjeblikke',
      musicAndMomentsQuote: 'Hver begivenhed fortæller en historie, og musikken er dens mest kraftfulde fortæller. Min rolle som DJ er at lytte dybt – til værterne, til gæsterne, til energien i rummet – og svare igen med et soundtrack, der løfter oplevelsen fra almindelig til ekstraordinær.',
      celebrationsWeddingsTitle: 'Fester & Bryllupper',
      celebrationsWeddingsBody: 'Skaber den perfekte atmosfære til livets mest dyrebare øjeblikke – fra ceremoniens elegance til receptionens energi.',
      corporateCulturalTitle: 'Firma- & Kulturevents',
      corporateCulturalBody: 'Professionel eventkuratering til konferencer, lanceringer, udstillinger og kulturelle begivenheder.',
      contactCtaTitle: 'Lad os skabe soundtracket til dit event',
      contactCtaBody: 'Tilgængelig til events i hele Danmark og derudover. Lad os tale om, hvordan vi gør din fejring uforglemmelig.',
      viewGallery: 'Se Galleri',
      
      // Gallery
      galleryTitle: 'Visuelle Fortællinger',
      gallerySubtitle: 'Øjeblikke fanget i lys og lyd',
      gallery1Alt: 'Professionelt setup',
      gallery1Caption: 'Professionelt DJ-setup',
      gallery2Alt: 'Liveoptræden',
      gallery2Caption: 'Liveoptræden',
      gallery3Alt: 'Stemning til eventet',
      gallery3Caption: 'Skaber stemning',
      gallery4Alt: 'Intime rammer',
      gallery4Caption: 'Intime øjeblikke',
      gallery5Alt: 'Udendørs arrangement',
      gallery5Caption: 'Udendørs arrangementer',
      gallery6Alt: 'DJ-udstyr',
      gallery6Caption: 'Håndværket',
      
      // Links
      linksTitle: 'Kunstnerisk Kreds',
      motherArt: 'Lene Helledie Kunst',
      daughterDj: 'Datterens Musikalske Rejse',
      motherArtDesc: 'Et liv dedikeret til visuel fortælling og kreativt udtryk',
      daughterDjDesc: 'Evolutionen fortsætter med friske perspektiver og grænseløs kreativitet',
      artConnectsTitle: 'Kunst Forbinder Os Alle',
      artConnectsBody: 'I vores familie er kreativiteten den røde tråd, der væver sig gennem generationer. Vi udtrykker de samme universelle sandheder gennem forskellige medier – visuel kunst, musikalske landskaber og lydlige fortællinger.',
      explore: 'Udforsk',
      
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