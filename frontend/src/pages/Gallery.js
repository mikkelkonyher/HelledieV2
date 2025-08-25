import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { X, Camera } from 'lucide-react';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxESiUyMG11c2ljfGVufDB8fHx8MTc1NjEyNzgyMnww&ixlib=rb-4.1.0&q=85",
      alt: "Atmospheric Lighting",
      caption: "Where Light Meets Sound"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1692176548571-86138128e36c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxESiUyMG11c2ljfGVufDB8fHx8MTc1NjEyNzgyMnww&ixlib=rb-4.1.0&q=85",
      alt: "Intimate Setting",
      caption: "Moments of Connection"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1569235604186-2594d69668ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxtdXNpYyUyMGF0bW9zcGhlcmV8ZW58MHx8fHwxNzU2MTI3ODI4fDA&ixlib=rb-4.1.0&q=85",
      alt: "Creative Process",
      caption: "The Art of Selection"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
      alt: "Venue Atmosphere",
      caption: "Sacred Spaces"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60",
      alt: "Musical Energy",
      caption: "Energy in Motion"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60",
      alt: "Creative Flow",
      caption: "Flow State"
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
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-light text-gray-900 mb-8 tracking-wider">
            {t('galleryTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('gallerySubtitle')}
          </p>
          <div className="w-24 h-px bg-indigo-400 mx-auto mt-8"></div>
        </div>

        {/* Gallery Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
            <Camera className="text-indigo-500 mx-auto mb-4" size={32} />
            <p className="text-gray-700 font-light text-lg leading-relaxed">
              Each image captures a fragment of the musical journey - the interplay of light and shadow, the intimate connection between artist and audience, and the sacred moments when music becomes transcendent experience.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white/70 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/50"
              onClick={() => openImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
                <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-light text-lg tracking-wide">{image.caption}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Artistic Statement */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 text-center border border-white/50">
            <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-wide">
              Beyond the Visual
            </h2>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              While these images capture moments in time, the true artistry lies in the spaces between - the silence before the first note, the collective breath held in anticipation, and the invisible threads that connect every soul in the room through the universal language of music.
            </p>
            <div className="w-16 h-px bg-indigo-300 mx-auto mt-8"></div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={closeImage}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={36} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-8 rounded-b-lg">
              <h3 className="text-center text-2xl font-light tracking-wide">{selectedImage.caption}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;