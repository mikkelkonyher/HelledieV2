import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { fetchPostBySlug } from '../lib/api/blog';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchPostBySlug(slug)
      .then(data => setPost(data))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  const getText = (da, en) => {
    if (language === 'da') return da || en || '';
    return en || da || '';
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString(language === 'da' ? 'da-DK' : 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-light text-gray-900 mb-4">
            {language === 'da' ? 'Indlæg ikke fundet' : 'Post not found'}
          </h1>
          <Link to="/blog" className="text-indigo-600 hover:text-indigo-700">
            {language === 'da' ? 'Tilbage til nyheder' : 'Back to news'}
          </Link>
        </div>
      </div>
    );
  }

  const title = getText(post.title_da, post.title_en);
  const content = getText(post.content_da, post.content_en);

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          {language === 'da' ? 'Nyheder' : 'News'}
        </Link>

        {post.image_url && (
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img
              src={post.image_url}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <header className="mb-8">
          <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-wide">
            {title}
          </h1>
          <p className="text-gray-500 font-light">
            {formatDate(post.published_at)}
          </p>
        </header>

        <div
          className="prose prose-lg prose-gray max-w-none font-light"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </div>
  );
};

export default BlogPost;
