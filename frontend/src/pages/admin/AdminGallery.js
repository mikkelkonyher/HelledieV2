import React, { useState, useEffect, useRef } from 'react';
import { fetchGalleryImages, uploadGalleryImage, updateGalleryImage, deleteGalleryImage, swapSortOrder } from '../../lib/api/gallery';
import { ArrowUp, ArrowDown, Pencil, Trash2, Plus, X, Upload, Loader2, Image as ImageIcon } from 'lucide-react';

const AdminGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editingImage, setEditingImage] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [showUpload, setShowUpload] = useState(false);
  const fileInputRef = useRef(null);

  const loadImages = async () => {
    try {
      const data = await fetchGalleryImages();
      setImages(data);
    } catch (err) {
      console.error('Failed to load gallery images:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadImages(); }, []);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      await uploadGalleryImage(file);
      await loadImages();
      setShowUpload(false);
    } catch (err) {
      alert('Upload fejlede: ' + err.message);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await updateGalleryImage(editingImage.id, {
        caption_da: editingImage.caption_da,
        caption_en: editingImage.caption_en,
        alt_da: editingImage.alt_da,
        alt_en: editingImage.alt_en,
      });
      setEditingImage(null);
      await loadImages();
    } catch (err) {
      alert('Fejl ved opdatering: ' + err.message);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteGalleryImage(deleteConfirm.id, deleteConfirm.storage_path);
      setDeleteConfirm(null);
      await loadImages();
    } catch (err) {
      alert('Fejl ved sletning: ' + err.message);
    }
  };

  const handleMove = async (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= images.length) return;
    try {
      await swapSortOrder(images[index], images[targetIndex]);
      await loadImages();
    } catch (err) {
      alert('Fejl ved flytning: ' + err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="animate-spin text-indigo-600" size={32} />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Galleri</h1>
          <p className="text-gray-500 mt-1">{images.length} billeder</p>
        </div>
        <button
          onClick={() => setShowUpload(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus size={20} />
          Upload billede
        </button>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={image.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img
                src={image.url}
                alt={image.alt_da || 'Gallery image'}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700 truncate">
                {image.caption_da || image.caption_en || 'Ingen billedtekst'}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <button
                  onClick={() => handleMove(index, -1)}
                  disabled={index === 0}
                  className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  title="Flyt op"
                >
                  <ArrowUp size={16} />
                </button>
                <button
                  onClick={() => handleMove(index, 1)}
                  disabled={index === images.length - 1}
                  className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  title="Flyt ned"
                >
                  <ArrowDown size={16} />
                </button>
                <div className="flex-1" />
                <button
                  onClick={() => setEditingImage({ ...image })}
                  className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
                  title="Rediger"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => setDeleteConfirm(image)}
                  className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                  title="Slet"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <ImageIcon size={48} className="mx-auto mb-4 opacity-50" />
          <p>Ingen billeder endnu. Upload det første!</p>
        </div>
      )}

      {/* Upload dialog */}
      {showUpload && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Upload billede</h2>
              <button onClick={() => setShowUpload(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              {uploading ? (
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="animate-spin text-indigo-600" size={32} />
                  <p className="text-sm text-gray-500">Uploader...</p>
                </div>
              ) : (
                <>
                  <Upload className="mx-auto mb-3 text-gray-400" size={32} />
                  <p className="text-sm text-gray-500 mb-3">
                    Klik for at vælge et billede
                  </p>
                  <p className="text-xs text-gray-400 mb-4">
                    JPG, PNG, WebP eller GIF. Maks 5MB.
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    onChange={handleUpload}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm"
                  >
                    Vælg billede
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Edit dialog */}
      {editingImage && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Rediger billede</h2>
              <button onClick={() => setEditingImage(null)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleEdit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Billedtekst (DA)</label>
                  <input
                    type="text"
                    value={editingImage.caption_da}
                    onChange={(e) => setEditingImage({ ...editingImage, caption_da: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Caption (EN)</label>
                  <input
                    type="text"
                    value={editingImage.caption_en}
                    onChange={(e) => setEditingImage({ ...editingImage, caption_en: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alt tekst (DA)</label>
                  <input
                    type="text"
                    value={editingImage.alt_da}
                    onChange={(e) => setEditingImage({ ...editingImage, alt_da: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alt text (EN)</label>
                  <input
                    type="text"
                    value={editingImage.alt_en}
                    onChange={(e) => setEditingImage({ ...editingImage, alt_en: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setEditingImage(null)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annuller
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Gem
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete confirmation */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Slet billede?</h2>
            <p className="text-gray-500 text-sm mb-6">
              Dette kan ikke fortrydes. Billedet vil blive permanent slettet.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Annuller
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Slet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminGallery;
