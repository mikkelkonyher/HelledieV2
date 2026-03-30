import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { fetchPublishedPosts } from '../lib/api/blog';
import { X } from 'lucide-react';

const Blog = () => {
  const { language } = useLanguage();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedImage, setExpandedImage] = useState(null);

  useEffect(() => {
    fetchPublishedPosts()
      .then(data => setPosts(data))
      .catch(err => console.error('Failed to load posts:', err))
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return language === 'da' ? 'Lige nu' : 'Just now';
    if (diffMins < 60) return `${diffMins}m`;
    if (diffHours < 24) return `${diffHours}h`;
    if (diffDays < 7) return `${diffDays}d`;
    return date.toLocaleDateString(language === 'da' ? 'da-DK' : 'en-US', {
      day: 'numeric', month: 'short',
    });
  };

  // Show preferred language, fall back to the other if empty
  const getText = (da, en) => {
    if (language === 'da') return da || en || '';
    return en || da || '';
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-light text-gray-900 mb-4 tracking-wider">
            {language === 'da' ? 'Nyheder' : 'News'}
          </h1>
          <p className="text-gray-500 font-light">
            {language === 'da' ? 'Seneste nyt og opdateringer' : 'Latest news and updates'}
          </p>
          <div className="w-24 h-px bg-indigo-400 mx-auto mt-6"></div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-light">
              {language === 'da' ? 'Ingen opslag endnu.' : 'No posts yet.'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => {
              const title = getText(post.title_da, post.title_en);
              const content = getText(post.content_da, post.content_en);

              return (
                <article
                  key={post.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  {/* Post header */}
                  <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src="/assets/fritlagtLogo.png"
                        alt="DJ Ole Helledie"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-semibold text-gray-900 text-sm">DJ Ole Helledie</span>
                      <div>
                        <span className="text-xs text-gray-400">{formatDate(post.published_at)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  {title && (
                    <div className="px-5 pb-2">
                      <h2 className="font-semibold text-gray-900">{title}</h2>
                    </div>
                  )}

                  {/* Text content */}
                  {content && (
                    <div
                      className="px-5 pb-4 text-gray-700 text-[15px] leading-relaxed blog-content"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  )}

                  {/* Image */}
                  {post.image_url && (
                    <div
                      className="cursor-pointer"
                      onClick={() => setExpandedImage(post.image_url)}
                    >
                      <img
                        src={post.image_url}
                        alt={title || 'Post image'}
                        className="w-full max-h-[500px] object-cover border-t border-gray-100"
                      />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Expanded image modal */}
      {expandedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <button
            onClick={() => setExpandedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={28} />
          </button>
          <img
            src={expandedImage}
            alt="Expanded"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Blog;
