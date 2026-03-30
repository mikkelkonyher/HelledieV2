import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image, FileText, Newspaper } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const AdminDashboard = () => {
  const [stats, setStats] = useState({ gallery: 0, content: 0, blog: 0 });

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
    fetchStats();
  }, []);

  const cards = [
    {
      title: 'Galleri',
      description: 'Administrer billeder i galleriet',
      icon: Image,
      count: stats.gallery,
      unit: 'billeder',
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
      title: 'Blog',
      description: 'Skriv og administrer blogindlæg',
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
              {stats.gallery !== undefined ? card.count : '...'}{' '}
              <span className="text-sm font-normal text-gray-500">{card.unit}</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
