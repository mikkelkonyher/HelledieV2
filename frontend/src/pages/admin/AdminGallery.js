import React, { useState, useEffect, useRef } from 'react';
import { fetchGalleryImages, uploadGalleryImage, updateGalleryImage, deleteGalleryImage, reorderGalleryImages } from '../../lib/api/gallery';
import { Pencil, Trash2, Plus, X, Upload, Loader2, Image as ImageIcon, Film, GripVertical } from 'lucide-react';
import { DndContext, closestCenter, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableItem = ({ image, onEdit, onDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: image.id });
  const isVideo = image.file_type === 'video';

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 'auto',
    opacity: isDragging ? 0.7 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="aspect-square overflow-hidden relative">
        {isVideo ? (
          <>
            <video src={image.url} className="w-full h-full object-cover" muted playsInline preload="metadata" />
            <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
              <Film size={12} />
              Video
            </div>
          </>
        ) : (
          <img src={image.url} alt={image.caption_da || 'Gallery image'} className="w-full h-full object-cover" />
        )}
        {/* Drag handle overlay */}
        <div
          {...attributes}
          {...listeners}
          className="absolute top-2 left-2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded cursor-grab active:cursor-grabbing transition-colors"
          title="Træk for at flytte"
        >
          <GripVertical size={16} />
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-700 truncate">
          {image.caption_da || image.caption_en || 'Ingen billedtekst'}
        </p>
        <div className="flex items-center justify-end gap-2 mt-3">
          <button
            onClick={() => onEdit(image)}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
            title="Rediger"
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => onDelete(image)}
            className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
            title="Slet"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');
  const [editingImage, setEditingImage] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [showUpload, setShowUpload] = useState(false);
  const fileInputRef = useRef(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 5 } }),
  );

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

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = images.findIndex(img => img.id === active.id);
    const newIndex = images.findIndex(img => img.id === over.id);
    const reordered = arrayMove(images, oldIndex, newIndex);

    // Optimistic update
    setImages(reordered);

    try {
      await reorderGalleryImages(reordered.map(img => img.id));
    } catch (err) {
      console.error('Reorder failed:', err);
      await loadImages(); // Revert on failure
    }
  };

  const handleUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setUploading(true);
    try {
      for (const file of files) {
        setUploadStatus(`${file.name}...`);
        await uploadGalleryImage(file, (status) => setUploadStatus(`${file.name}: ${status}`));
      }
      await loadImages();
      setShowUpload(false);
    } catch (err) {
      alert('Upload fejlede: ' + err.message);
    } finally {
      setUploading(false);
      setUploadStatus('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await updateGalleryImage(editingImage.id, {
        caption_da: editingImage.caption_da,
        caption_en: editingImage.caption_en,
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
          <p className="text-gray-500 mt-1">{images.length} filer — træk for at ændre rækkefølge</p>
        </div>
        <button
          onClick={() => setShowUpload(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus size={20} />
          Upload
        </button>
      </div>

      {/* Sortable image grid */}
      {images.length > 0 ? (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={images.map(img => img.id)} strategy={rectSortingStrategy}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <SortableItem
                  key={image.id}
                  image={image}
                  onEdit={(img) => setEditingImage({ ...img })}
                  onDelete={(img) => setDeleteConfirm(img)}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      ) : (
        <div className="text-center py-20 text-gray-500">
          <ImageIcon size={48} className="mx-auto mb-4 opacity-50" />
          <p>Ingen filer endnu. Upload det første!</p>
        </div>
      )}

      {/* Upload dialog */}
      {showUpload && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Upload</h2>
              <button onClick={() => !uploading && setShowUpload(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              {uploading ? (
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="animate-spin text-indigo-600" size={32} />
                  <p className="text-sm text-gray-500">{uploadStatus || 'Uploader...'}</p>
                </div>
              ) : (
                <>
                  <Upload className="mx-auto mb-3 text-gray-400" size={32} />
                  <p className="text-sm text-gray-500 mb-1">Billeder og videoer</p>
                  <p className="text-xs text-gray-400 mb-4">Billeder komprimeres automatisk. Video maks 50MB.</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime,video/webm"
                    onChange={handleUpload}
                    multiple
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm"
                  >
                    Vælg filer
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
              <h2 className="text-lg font-semibold">Rediger</h2>
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
            <h2 className="text-lg font-semibold mb-2">Slet?</h2>
            <p className="text-gray-500 text-sm mb-6">
              Dette kan ikke fortrydes. Filen vil blive permanent slettet.
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
