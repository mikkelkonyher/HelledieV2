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
      alt: "Atmospheric Setup",
      caption: "Where Light Meets Sound"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1578185544327-68fca190b2da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxESiUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc1NjEzMDQ5N3ww&ixlib=rb-4.1.0&q=85",
      alt: "DJ Performance",
      caption: "Live Performance"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1698153763051-06fcad199e24?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxESiUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc1NjEzMDQ5N3ww&ixlib=rb-4.1.0&q=85",
      alt: "Event Atmosphere",
      caption: "Creating Atmosphere"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1698153771636-a56f5656a60f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxESiUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc1NjEzMDQ5N3ww&ixlib=rb-4.1.0&q=85",
      alt: "Professional Setup",
      caption: "Professional Sound"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1640509724989-d8793574d307?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxtdXNpYyUyMGF0bW9zcGhlcmV8ZW58MHx8fHwxNzU2MTMwNTA0fDA&ixlib=rb-4.1.0&q=85",
      alt: "Outdoor Event",
      caption: "Outdoor Venues"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg",
      alt: "Crowd Energy",
      caption: "Crowd Connection"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1692176548571-86138128e36c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxESiUyMG11c2ljfGVufDB8fHx8MTc1NjEyNzgyMnww&ixlib=rb-4.1.0&q=85",
      alt: "Intimate Setting",
      caption: "Intimate Moments"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1698153777736-2d6d8fd34e47?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxESiUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc1NjEzMDQ5N3ww&ixlib=rb-4.1.0&q=85",
      alt: "Event Energy",
      caption: "Pure Energy"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1569235604186-2594d69668ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxtdXNpYyUyMGF0bW9zcGhlcmV8ZW58MHx8fHwxNzU2MTI3ODI4fDA&ixlib=rb-4.1.0&q=85",
      alt: "DJ Controller",
      caption: "The Craft"
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
    <div className="min-h-screen">
      {/* Hero Image */}
      <section className="relative h-64">
        <img
          src="https://images.unsplash.com/photo-1578185544327-68fca190b2da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxESiUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc1NjEzMDQ5N3ww&ixlib=rb-4.1.0&q=85"
          alt="Gallery Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-light tracking-wider mb-4">
              {t('galleryTitle')}
            </h1>
            <p className="text-xl font-light">
              {t('gallerySubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid - No padding, full bleed */}
      <section className="py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden cursor-pointer"
              onClick={() => openImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-xl font-light tracking-wide">{image.caption}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
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