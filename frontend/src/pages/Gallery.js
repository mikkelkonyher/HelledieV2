import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { X } from 'lucide-react';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxESiUyMG11c2ljfGVufDB8fHx8MTc1NjEyNzgyMnww&ixlib=rb-4.1.0&q=85",
      alt: "DJ Equipment Setup",
      caption: "Professional DJ Setup"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1692176548571-86138128e36c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxESiUyMG11c2ljfGVufDB8fHx8MTc1NjEyNzgyMnww&ixlib=rb-4.1.0&q=85",
      alt: "DJ Performance",
      caption: "Live Performance"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1569235604186-2594d69668ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxtdXNpYyUyMGF0bW9zcGhlcmV8ZW58MHx8fHwxNzU2MTI3ODI4fDA&ixlib=rb-4.1.0&q=85",
      alt: "DJ Controller",
      caption: "Professional Controller"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
      alt: "Concert Venue",
      caption: "Event Venue"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60",
      alt: "Music Event",
      caption: "Music Event"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60",
      alt: "DJ Mixing",
      caption: "DJ Mixing Session"
    }
  ];

  const openImage = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t('galleryTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('gallerySubtitle')}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => openImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImage}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
              <p className="text-center text-lg font-semibold">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;