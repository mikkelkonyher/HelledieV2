// Mock data for DJ Ole Helledie - Musical Storyteller & Event Curator website
// This file contains placeholder data that will be replaced with backend data later

export const mockData = {
  // Bio and about information
  bio: {
    en: "DJ Ole Helledie brings together the art of musical curation with the craft of reading a room. Through years of experience behind the decks, he has developed an intuitive understanding of how music can transform spaces and connect people. Each event becomes a collaborative experience, where the energy of the crowd guides the musical journey from the first track to the last.",
    da: "DJ Ole Helledie bringer musikens kurateringskunst sammen med håndværket at læse et rum. Gennem års erfaring bag pladespillerne har han udviklet en intuitiv forståelse af, hvordan musik kan transformere rum og forbinde mennesker. Hver begivenhed bliver til en kollaborativ oplevelse, hvor publikums energi styrer den musikalske rejse fra første til sidste track."
  },

  // Professional philosophy
  philosophy: {
    en: "Every event tells a story, and music is its most powerful narrator. My role as a DJ is to listen deeply - to the hosts, to the guests, to the energy in the room - and respond with a soundtrack that elevates the experience from ordinary to extraordinary.",
    da: "Hver begivenhed fortæller en historie, og musik er dens mest kraftfulde fortæller. Min rolle som DJ er at lytte dybt - til værterne, til gæsterne, til energien i rummet - og respondere med et soundtrack, der løfter oplevelsen fra almindelig til ekstraordinær."
  },

  // Services and specialties
  services: {
    weddings: {
      en: "Creating the perfect atmosphere for life's most precious moments, from ceremony elegance to reception energy.",
      da: "Skaber den perfekte atmosfære for livets mest dyrebare øjeblikke, fra ceremoniens elegance til receptionnens energi."
    },
    corporate: {
      en: "Professional event curation for conferences, launches, exhibitions, and cultural celebrations.",
      da: "Professionel event-kuratoring til konferencer, lanceringer, udstillinger og kulturelle fejringer."
    },
    private: {
      en: "Intimate gatherings and private parties where music becomes the thread that weaves people together.",
      da: "Intime sammenkomster og private fester, hvor musik bliver tråden, der væver mennesker sammen."
    }
  },

  // Gallery images with artistic captions
  gallery: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxESiUyMG11c2ljfGVufDB8fHx8MTc1NjEyNzgyMnww&ixlib=rb-4.1.0&q=85",
      alt: "Professional DJ Setup",
      caption: {
        en: "Where Light Meets Sound",
        da: "Hvor Lys Møder Lyd"
      }
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1692176548571-86138128e36c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxESiUyMG11c2ljfGVufDB8fHx8MTc1NjEyNzgyMnww&ixlib=rb-4.1.0&q=85",
      alt: "Event Performance",
      caption: {
        en: "Moments of Connection",
        da: "Øjeblikke af Forbindelse"
      }
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1569235604186-2594d69668ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxtdXNpYyUyMGF0bW9zcGhlcmV8ZW58MHx8fHwxNzU2MTI3ODI4fDA&ixlib=rb-4.1.0&q=85",
      alt: "DJ Equipment",
      caption: {
        en: "The Art of Selection",
        da: "Kunsten at Udvælge"
      }
    }
  ],

  // Contact information
  contact: {
    email: "ole@olehelledie.dk",
    availability: {
      en: "Available for events throughout Denmark and beyond",
      da: "Tilgængelig for begivenheder i hele Danmark og derude"
    }
  },

  // Family artistic links
  familyLinks: [
    {
      id: 1,
      title: {
        en: "Mother's Art Gallery",
        da: "Mors Kunstgalleri"
      },
      description: {
        en: "A lifetime dedicated to visual storytelling and creative expression",
        da: "Et liv dedikeret til visuel fortælling og kreativt udtryk"
      },
      url: "https://artgallery-placeholder.com"
    },
    {
      id: 2,
      title: {
        en: "Daughter's Musical Journey",
        da: "Datterens Musikalske Rejse"
      },
      description: {
        en: "The evolution continues with fresh perspectives and boundless creativity",
        da: "Evolutionen fortsætter med friske perspektiver og grænseløs kreativitet"
      },
      url: "https://musicjourney-placeholder.com"
    }
  ],

  // Social media links
  socialMedia: {
    facebook: "https://facebook.com/djolehelledie",
    instagram: "https://instagram.com/djolehelledie", 
    linkedin: "https://linkedin.com/in/olehelledie"
  },

  // Recent events (for future use)
  recentEvents: [
    {
      id: 1,
      date: "2024-07-15",
      venue: "Kronborg Castle",
      eventType: "Cultural Wedding",
      location: "Helsingør"
    },
    {
      id: 2,
      date: "2024-06-20",
      venue: "Design Museum",
      eventType: "Exhibition Opening", 
      location: "Copenhagen"
    }
  ],

  // Client reflections (for future enhancement)
  reflections: [
    {
      id: 1,
      author: "Sophia & Marcus",
      experience: "Wedding Reception",
      text: {
        en: "Ole understood exactly what we wanted - music that would bring our families together while honoring both our backgrounds. The dance floor never emptied!",
        da: "Ole forstod præcis, hvad vi ønskede - musik, der ville bringe vores familier sammen og samtidig ære begge vores baggrunde. Dansegulvet blev aldrig tomt!"
      }
    },
    {
      id: 2,
      author: "Copenhagen Cultural Center",
      experience: "Art Exhibition Opening",
      text: {
        en: "Professional, intuitive, and perfectly attuned to our event's atmosphere. Ole elevated our exhibition opening to something truly special.",
        da: "Professionel, intuitiv og perfekt indstillet på vores begivenheds atmosfære. Ole løftede vores udstillingsåbning til noget virkelig specielt."
      }
    }
  ]
};

export default mockData;