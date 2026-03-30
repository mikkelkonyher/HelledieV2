import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPost, updatePost, fetchPostById, generateSlug } from '../../lib/api/blog';
import { ArrowLeft, Loader2 } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['blockquote'],
    ['clean'],
  ],
};

const AdminBlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('da');
  const [form, setForm] = useState({
    title_da: '',
    title_en: '',
    slug: '',
    content_da: '',
    content_en: '',
    image_url: '',
    published: false,
  });

  useEffect(() => {
    if (isEditing) {
      fetchPostById(id)
        .then((post) => {
          setForm({
            title_da: post.title_da,
            title_en: post.title_en,
            slug: post.slug,
            content_da: post.content_da,
            content_en: post.content_en,
            image_url: post.image_url || '',
            published: post.published,
          });
        })
        .catch((err) => {
          alert('Kunne ikke hente indlæg: ' + err.message);
          navigate('/admin/blog');
        })
        .finally(() => setLoading(false));
    }
  }, [id, isEditing, navigate]);

  const handleChange = (field, value) => {
    setForm(prev => {
      const updated = { ...prev, [field]: value };
      // Auto-generate slug from Danish title
      if (field === 'title_da' && !isEditing) {
        updated.slug = generateSlug(value);
      }
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title_da && !form.title_en) {
      alert('Tilføj mindst en titel');
      return;
    }

    const submitData = { ...form };
    if (!submitData.slug) {
      submitData.slug = generateSlug(form.title_da || form.title_en);
    }

    setSaving(true);
    try {
      if (isEditing) {
        await updatePost(id, submitData);
      } else {
        await createPost(submitData);
      }
      navigate('/admin/blog');
    } catch (err) {
      alert('Fejl: ' + err.message);
    } finally {
      setSaving(false);
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
    <div className="max-w-4xl">
      <button
        onClick={() => navigate('/admin/blog')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        Tilbage til nyheder
      </button>

      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        {isEditing ? 'Rediger nyhed' : 'Ny nyhed'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Language tabs */}
        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('da')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'da' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
            }`}
          >
            Dansk
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('en')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'en' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
            }`}
          >
            English
          </button>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {activeTab === 'da' ? 'Titel (DA)' : 'Title (EN)'}
          </label>
          <input
            type="text"
            value={activeTab === 'da' ? form.title_da : form.title_en}
            onChange={(e) => handleChange(activeTab === 'da' ? 'title_da' : 'title_en', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-lg"
            placeholder={activeTab === 'da' ? 'Indtast titel...' : 'Enter title...'}
          />
        </div>

        {/* Content - Rich Text Editor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {activeTab === 'da' ? 'Indhold (DA)' : 'Content (EN)'}
          </label>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <ReactQuill
              theme="snow"
              value={activeTab === 'da' ? form.content_da : form.content_en}
              onChange={(value) => handleChange(activeTab === 'da' ? 'content_da' : 'content_en', value)}
              modules={quillModules}
              className="bg-white"
              style={{ minHeight: '300px' }}
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Billede URL (valgfrit)</label>
          <input
            type="text"
            value={form.image_url}
            onChange={(e) => handleChange('image_url', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm"
            placeholder="https://..."
          />
          {form.image_url && (
            <img src={form.image_url} alt="Preview" className="mt-2 rounded-lg max-h-48 object-cover" />
          )}
        </div>

        {/* Published toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleChange('published', !form.published)}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              form.published ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow ${
                form.published ? 'translate-x-6' : ''
              }`}
            />
          </button>
          <span className="text-sm font-medium text-gray-700">
            {form.published ? 'Publiceret' : 'Kladde'}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {saving && <Loader2 size={16} className="animate-spin" />}
            {isEditing ? 'Gem ændringer' : 'Opret indlæg'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/blog')}
            className="px-6 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Annuller
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminBlogEditor;
