// Mock data for Ole Helledie - Sound Artist & Musical Storyteller website
// This file contains placeholder data that will be replaced with backend data later

export const mockData = {
  // Bio and about information
  bio: {
    en: "Ole Helledie crafts sonic journeys that transcend ordinary listening experiences. Through the delicate art of musical curation and live mixing, he weaves together sounds that speak to the soul. Each performance is a unique narrative, born from the energy of the moment and the collective heartbeat of those present.",
    da: "Ole Helledie skaber lydrejser, der transcenderer almindelige lytteoplevelser. Gennem den delikate kunst at kuratere og mixe live musik væver han lyde sammen, der taler til sjælen. Hver optræden er en unik fortælling, født af øjeblikkets energi og de tilstedeværendes kollektive hjerteslag."
  },

  // Artistic philosophy
  philosophy: {
    en: "Music is the bridge between the tangible and the transcendent. In each performance, I seek not just to entertain, but to create a sacred space where strangers become connected through shared rhythm, where time dissolves, and where the ordinary transforms into the extraordinary.",
    da: "Musik er broen mellem det håndgribelige og det transcendente. I hver optræden søger jeg ikke kun at underholde, men at skabe et helligt rum, hvor fremmede bliver forbundet gennem fælles rytme, hvor tiden opløses, og hvor det almindelige transformeres til det ekstraordinære."
  },

  // Gallery images with artistic captions
  gallery: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxESiUyMG11c2ljfGVufDB8fHx8MTc1NjEyNzgyMnww&ixlib=rb-4.1.0&q=85",
      alt: "Atmospheric Lighting",
      caption: {
        en: "Where Light Meets Sound",
        da: "Hvor Lys Møder Lyd"
      }
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1692176548571-86138128e36c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxESiUyMG11c2ljfGVufDB8fHx8MTc1NjEyNzgyMnww&ixlib=rb-4.1.0&q=85",
      alt: "Intimate Setting",
      caption: {
        en: "Moments of Connection",
        da: "Øjeblikke af Forbindelse"
      }
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1569235604186-2594d69668ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxtdXNpYyUyMGF0bW9zcGhlcmV8ZW58MHx8fHwxNzU2MTI3ODI4fDA&ixlib=rb-4.1.0&q=85",
      alt: "Creative Process",
      caption: {
        en: "The Art of Selection",
        da: "Kunsten at Udvælge"
      }
    }
  ],

  // Contact information
  contact: {
    email: "ole@olehelledie.dk",
    artisticStatement: {
      en: "Connect for musical collaborations and sonic explorations",
      da: "Forbind dig for musikalske samarbejder og lydlige udforskning"
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
    facebook: "https://facebook.com/olehelledie",
    instagram: "https://instagram.com/olehelledie",
    linkedin: "https://linkedin.com/in/olehelledie"
  },

  // Artistic experiences (for future use)
  upcomingExperiences: [
    {
      id: 1,
      date: "2024-08-30",
      venue: "Intimate Gallery Space",
      experienceType: "Sonic Meditation",
      isPrivate: false
    },
    {
      id: 2,
      date: "2024-09-15",
      venue: "Cultural Center",
      experienceType: "Audio-Visual Journey",
      isPrivate: false
    }
  ],

  // Artistic reflections (for future enhancement)
  reflections: [
    {
      id: 1,
      author: "Sophia & Marcus",
      experience: "Wedding Ceremony",
      text: {
        en: "Ole transformed our celebration into a transcendent experience. The music carried our emotions and connected every soul present.",
        da: "Ole forvandlede vores fejring til en transcendent oplevelse. Musikken bar vores følelser og forbandt hver sjæl til stede."
      }
    },
    {
      id: 2,
      author: "Cultural Arts Collective",
      experience: "Art Installation Opening",
      text: {
        en: "A masterful weaving of sound and space. Ole's artistic vision elevated our entire exhibition to new heights.",
        da: "En mesterlig sammenflætning af lyd og rum. Oles kunstneriske vision løftede hele vores udstilling til nye højder."
      }
    }
  ]
};

export default mockData;