import React, { useState, useEffect } from 'react';
import { fetchAllSiteContent, updateSiteContent } from '../../lib/api/content';
import { Loader2, Save, Check } from 'lucide-react';

const SECTIONS = [
  { key: 'home', label: 'Forside' },
  { key: 'about', label: 'Om Ole' },
  { key: 'gallery', label: 'Galleri' },
  { key: 'links', label: 'Links' },
  { key: 'footer', label: 'Footer' },
  { key: 'navigation', label: 'Navigation' },
];

const AdminContent = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [saving, setSaving] = useState({});
  const [saved, setSaved] = useState({});

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchAllSiteContent();
        setContent(data);
      } catch (err) {
        console.error('Failed to load content:', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleChange = (id, field, value) => {
    setContent(prev =>
      prev.map(item => item.id === id ? { ...item, [field]: value } : item)
    );
  };

  const handleSave = async (item) => {
    setSaving(prev => ({ ...prev, [item.id]: true }));
    try {
      await updateSiteContent(item.id, item.value_da, item.value_en);
      setSaved(prev => ({ ...prev, [item.id]: true }));
      setTimeout(() => setSaved(prev => ({ ...prev, [item.id]: false })), 2000);
    } catch (err) {
      alert('Fejl ved gemning: ' + err.message);
    } finally {
      setSaving(prev => ({ ...prev, [item.id]: false }));
    }
  };

  const filteredContent = content.filter(item => item.section === activeTab);

  const isLongText = (text) => text && text.length > 100;

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="animate-spin text-indigo-600" size={32} />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Indhold</h1>
        <p className="text-gray-500 mt-1">Rediger tekst på hjemmesiden (dansk og engelsk)</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-gray-100 p-1 rounded-lg overflow-x-auto">
        {SECTIONS.map((section) => (
          <button
            key={section.key}
            onClick={() => setActiveTab(section.key)}
            className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === section.key
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Content items */}
      <div className="space-y-4">
        {filteredContent.map((item) => (
          <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-gray-500 font-mono">{item.key}</label>
              <button
                onClick={() => handleSave(item)}
                disabled={saving[item.id]}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  saved[item.id]
                    ? 'bg-green-50 text-green-600'
                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                } disabled:opacity-50`}
              >
                {saving[item.id] ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : saved[item.id] ? (
                  <Check size={14} />
                ) : (
                  <Save size={14} />
                )}
                {saved[item.id] ? 'Gemt!' : 'Gem'}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Dansk</label>
                {isLongText(item.value_da) || isLongText(item.value_en) ? (
                  <textarea
                    value={item.value_da}
                    onChange={(e) => handleChange(item.id, 'value_da', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm resize-y"
                  />
                ) : (
                  <input
                    type="text"
                    value={item.value_da}
                    onChange={(e) => handleChange(item.id, 'value_da', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm"
                  />
                )}
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">English</label>
                {isLongText(item.value_da) || isLongText(item.value_en) ? (
                  <textarea
                    value={item.value_en}
                    onChange={(e) => handleChange(item.id, 'value_en', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm resize-y"
                  />
                ) : (
                  <input
                    type="text"
                    value={item.value_en}
                    onChange={(e) => handleChange(item.id, 'value_en', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredContent.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p>Ingen indhold i denne sektion.</p>
        </div>
      )}
    </div>
  );
};

export default AdminContent;
