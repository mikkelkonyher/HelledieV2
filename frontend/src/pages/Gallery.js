import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { fetchGalleryImages } from '../lib/api/gallery';
import { X, Play } from 'lucide-react';

const Gallery = () => {
  const { language, t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGalleryImages()
      .then(data => setGalleryImages(data))
      .catch(err => console.error('Failed to load gallery:', err))
      .finally(() => setLoading(false));
  }, []);

  const openItem = (image) => {
    setSelectedItem(image);
    document.body.style.overflow = 'hidden';
  };

  const closeItem = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  const getCaption = (image) => language === 'da' ? (image.caption_da || image.caption_en) : (image.caption_en || image.caption_da);
  const getAlt = (image) => language === 'da' ? (image.alt_da || image.alt_en) : (image.alt_en || image.alt_da);
  const isVideo = (image) => image.file_type === 'video';

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

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => openItem(image)}
              >
                <div className="aspect-square overflow-hidden relative">
                  {isVideo(image) ? (
                    <>
                      <video
                        src={image.url}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        preload="metadata"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-black/70 transition-colors">
                          <Play size={24} className="text-white ml-1" fill="white" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={image.url}
                      alt={getAlt(image) || 'Gallery image'}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                </div>
                {!isVideo(image) && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white font-light text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {getCaption(image)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeItem}
        >
          <div
            className="relative max-w-4xl max-h-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeItem}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            {isVideo(selectedItem) ? (
              <video
                src={selectedItem.url}
                controls
                autoPlay
                className="max-w-full max-h-[80vh] rounded-lg"
              />
            ) : (
              <img
                src={selectedItem.url}
                alt={getAlt(selectedItem) || 'Gallery image'}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
            {getCaption(selectedItem) && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
                <p className="text-center text-lg font-light">{getCaption(selectedItem)}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
