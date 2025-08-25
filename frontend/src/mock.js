// Mock data for DJ Ole Helledie website
// This file contains placeholder data that will be replaced with backend data later

export const mockData = {
  // Bio and about information
  bio: {
    en: "Ole Helledie is a passionate DJ and music producer with years of experience in creating unforgettable musical experiences. Known for his unique style and ability to read the crowd, Ole brings energy and professionalism to every event. From intimate gatherings to large-scale celebrations, he crafts the perfect soundtrack for any occasion.",
    da: "Ole Helledie er en passioneret DJ og musikproducent med års erfaring i at skabe uforglemmelige musikalske oplevelser. Kendt for sin unikke stil og evne til at læse publikum, bringer Ole energi og professionalisme til enhver begivenhed. Fra intime sammenkomster til store fester skaber han det perfekte soundtrack til enhver lejlighed."
  },

  // Gallery images with captions
  gallery: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxESiUyMG11c2ljfGVufDB8fHx8MTc1NjEyNzgyMnww&ixlib=rb-4.1.0&q=85",
      alt: "DJ Equipment Setup",
      caption: {
        en: "Professional DJ Setup",
        da: "Professionelt DJ Setup"
      }
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1692176548571-86138128e36c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxESiUyMG11c2ljfGVufDB8fHx8MTc1NjEyNzgyMnww&ixlib=rb-4.1.0&q=85",
      alt: "DJ Performance",
      caption: {
        en: "Live Performance",
        da: "Live Optræden"
      }
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1569235604186-2594d69668ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxtdXNpYyUyMGF0bW9zcGhlcmV8ZW58MHx8fHwxNzU2MTI3ODI4fDA&ixlib=rb-4.1.0&q=85",
      alt: "DJ Controller",
      caption: {
        en: "Professional Controller",
        da: "Professionel Controller"
      }
    }
  ],

  // Contact information
  contact: {
    email: "ole@djolehelledie.dk",
    phone: "+45 12 34 56 78",
    bookingUrl: "https://booking.djolehelledie.dk"
  },

  // Family links
  familyLinks: [
    {
      id: 1,
      title: {
        en: "Mother's Art Gallery",
        da: "Mors Kunstgalleri"
      },
      description: {
        en: "Explore beautiful artworks and creative expressions",
        da: "Udforsk smukke kunstværker og kreative udtryk"
      },
      url: "https://artgallery-placeholder.com"
    },
    {
      id: 2,
      title: {
        en: "Daughter's DJ Page",
        da: "Datterens DJ Side"
      },
      description: {
        en: "Discover the next generation of DJ talent",
        da: "Opdag næste generation af DJ talent"
      },
      url: "https://djpage-placeholder.com"
    }
  ],

  // Social media links
  socialMedia: {
    facebook: "https://facebook.com/djolehelledie",
    instagram: "https://instagram.com/djolehelledie",
    linkedin: "https://linkedin.com/in/olehelledie"
  },

  // Events/performances (for future use)
  upcomingEvents: [
    {
      id: 1,
      date: "2024-08-30",
      venue: "Copenhagen Music Hall",
      eventType: "Wedding Reception",
      isPrivate: false
    },
    {
      id: 2,
      date: "2024-09-15",
      venue: "Private Venue",
      eventType: "Corporate Event",
      isPrivate: true
    }
  ],

  // Testimonials (for future enhancement)
  testimonials: [
    {
      id: 1,
      name: "Sarah & Michael",
      event: "Wedding",
      text: {
        en: "Ole made our wedding unforgettable! The music was perfect all night long.",
        da: "Ole gjorde vores bryllup uforglemmelig! Musikken var perfekt hele natten."
      },
      rating: 5
    },
    {
      id: 2,
      name: "Copenhagen Events Ltd",
      event: "Corporate Party",
      text: {
        en: "Professional, reliable, and fantastic music selection. Highly recommended!",
        da: "Professionel, pålidelig og fantastisk musikudvælgelse. Kan varmt anbefales!"
      },
      rating: 5
    }
  ]
};

export default mockData;