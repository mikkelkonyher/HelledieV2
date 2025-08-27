import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { X } from 'lucide-react';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "/assets/Gallery/8B972D8E-A54A-4AC7-93FE-09E75E0BFB4A.JPG",
      alt: t('gallery1Alt'),
      caption: t('gallery1Caption')
    },
    {
      id: 2,
      src: "/assets/Gallery/4D3EB273-366E-4834-B3FF-DAB6244F9D5C.JPG",
      alt: t('gallery2Alt'),
      caption: t('gallery2Caption')
    },
    {
      id: 3,
      src: "/assets/Gallery/2E4061A5-49BD-4A07-98EE-35AFEEF087B6.JPG",
      alt: t('gallery3Alt'),
      caption: t('gallery3Caption')
    },
    {
      id: 4,
      src: "/assets/Gallery/C015FD34-A517-4360-88CA-14AFDC645D3B.JPG",
      alt: t('gallery4Alt'),
      caption: t('gallery4Caption')
    },
    {
      id: 5,
      src: "/assets/Gallery/480952256_3076331369171649_5175806130906190233_n.jpg",
      alt: t('gallery5Alt'),
      caption: t('gallery5Caption')
    },
    {
      id: 6,
      src: "/assets/Gallery/B76E835B-6FF0-43DD-AF91-F1A412827003.JPG",
      alt: t('gallery6Alt'),
      caption: t('gallery6Caption')
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
          <h1 className="text-5xl font-light text-gray-900 mb-6 tracking-wider">
            {t('galleryTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('gallerySubtitle')}
          </p>
          <div className="w-24 h-px bg-indigo-400 mx-auto mt-6"></div>
        </div>

        {/* Gallery Grid - 6 images in 2 rows */}
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
                <div className="text-white font-light text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
        {selectedImage && (
            <div
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                onClick={closeImage}
            >
                <div
                    className="relative max-w-4xl max-h-full"
                    onClick={e => e.stopPropagation()}
                >
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
                        <p className="text-center text-lg font-light">{selectedImage.caption}</p>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default Gallery;