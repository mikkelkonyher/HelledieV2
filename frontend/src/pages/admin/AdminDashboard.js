import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image, FileText, Newspaper, HardDrive } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const STORAGE_LIMIT_MB = 1024; // 1GB

const AdminDashboard = () => {
  const [stats, setStats] = useState({ gallery: 0, content: 0, blog: 0 });
  const [storageUsed, setStorageUsed] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const [galleryRes, contentRes, blogRes] = await Promise.all([
        supabase.from('gallery_images').select('id', { count: 'exact', head: true }),
        supabase.from('site_content').select('id', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
      ]);
      setStats({
        gallery: galleryRes.count || 0,
        content: contentRes.count || 0,
        blog: blogRes.count || 0,
      });
    };

    const fetchStorageUsage = async () => {
      try {
        const { data, error } = await supabase.storage
          .from('gallery-images')
          .list('gallery', { limit: 1000 });

        if (error || !data) {
          setStorageUsed(0);
          return;
        }

        // Each file object has metadata.size, but list doesn't always include it.
        // We sum up what we can. If sizes aren't available, estimate from gallery_images table.
        let totalBytes = 0;
        let hasSize = false;

        for (const file of data) {
          if (file.metadata?.size) {
            totalBytes += file.metadata.size;
            hasSize = true;
          }
        }

        if (!hasSize) {
          // Fallback: estimate from file count
          // Average ~1MB per image, ~30MB per video
          const { data: images } = await supabase
            .from('gallery_images')
            .select('file_type');
          if (images) {
            for (const img of images) {
              totalBytes += img.file_type === 'video' ? 30 * 1024 * 1024 : 1 * 1024 * 1024;
            }
          }
        }

        setStorageUsed(totalBytes);
      } catch {
        setStorageUsed(0);
      }
    };

    fetchStats();
    fetchStorageUsage();
  }, []);

  const formatBytes = (bytes) => {
    if (bytes === null) return '...';
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  };

  const storagePercent = storageUsed !== null
    ? Math.min((storageUsed / (STORAGE_LIMIT_MB * 1024 * 1024)) * 100, 100)
    : 0;

  const storageColor = storagePercent > 90 ? 'bg-red-500' : storagePercent > 70 ? 'bg-yellow-500' : 'bg-indigo-500';

  const cards = [
    {
      title: 'Galleri',
      description: 'Administrer billeder og videoer',
      icon: Image,
      count: stats.gallery,
      unit: 'filer',
      to: '/admin/gallery',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Indhold',
      description: 'Rediger tekst på hjemmesiden',
      icon: FileText,
      count: stats.content,
      unit: 'tekstfelter',
      to: '/admin/content',
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Nyheder',
      description: 'Skriv og administrer nyheder',
      icon: Newspaper,
      count: stats.blog,
      unit: 'indlæg',
      to: '/admin/blog',
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Velkommen til admin panelet</p>
      </div>

      {/* Storage indicator */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center">
            <HardDrive size={20} />
          </div>
          <div className="flex-1">
            <h2 className="text-sm font-semibold text-gray-900">Lagerplads</h2>
            <p className="text-xs text-gray-500">
              {formatBytes(storageUsed)} brugt af {STORAGE_LIMIT_MB >= 1024 ? `${STORAGE_LIMIT_MB / 1024} GB` : `${STORAGE_LIMIT_MB} MB`}
            </p>
          </div>
          <span className={`text-sm font-semibold ${storagePercent > 90 ? 'text-red-600' : storagePercent > 70 ? 'text-yellow-600' : 'text-gray-600'}`}>
            {storagePercent.toFixed(1)}%
          </span>
        </div>
        <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${storageColor}`}
            style={{ width: `${storagePercent}%` }}
          />
        </div>
        {storagePercent > 80 && (
          <p className="text-xs text-red-500 mt-2">
            Lagerplads er ved at løbe tør. Overvej at slette gamle filer eller opgradere din plan.
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-lg ${card.color} flex items-center justify-center mb-4`}>
              <card.icon size={24} />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">{card.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{card.description}</p>
            <p className="text-2xl font-bold text-gray-900 mt-4">
              {card.count}{' '}
              <span className="text-sm font-normal text-gray-500">{card.unit}</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
