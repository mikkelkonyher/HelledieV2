import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllPosts, deletePost, updatePost } from '../../lib/api/blog';
import { Plus, Pencil, Trash2, Eye, EyeOff, Loader2 } from 'lucide-react';

const AdminBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const loadPosts = async () => {
    try {
      const data = await fetchAllPosts();
      setPosts(data);
    } catch (err) {
      console.error('Failed to load posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadPosts(); }, []);

  const handleTogglePublish = async (post) => {
    try {
      await updatePost(post.id, {
        published: !post.published,
        published_at: !post.published ? new Date().toISOString() : post.published_at,
      });
      await loadPosts();
    } catch (err) {
      alert('Fejl: ' + err.message);
    }
  };

  const handleDelete = async () => {
    try {
      await deletePost(deleteConfirm.id);
      setDeleteConfirm(null);
      await loadPosts();
    } catch (err) {
      alert('Fejl ved sletning: ' + err.message);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString('da-DK', {
      year: 'numeric', month: 'short', day: 'numeric',
    });
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
          <h1 className="text-2xl font-semibold text-gray-900">Blog</h1>
          <p className="text-gray-500 mt-1">{posts.length} indlæg</p>
        </div>
        <Link
          to="/admin/blog/new"
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus size={20} />
          Nyt indlæg
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p>Ingen blogindlæg endnu.</p>
          <Link
            to="/admin/blog/new"
            className="text-indigo-600 hover:text-indigo-700 mt-2 inline-block"
          >
            Opret det første indlæg
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Titel</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Status</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Dato</th>
                <th className="text-right px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Handlinger</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{post.title_da || post.title_en || 'Uden titel'}</div>
                    <div className="text-sm text-gray-500 sm:hidden mt-1">
                      {post.published ? (
                        <span className="text-green-600">Publiceret</span>
                      ) : (
                        <span className="text-yellow-600">Kladde</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    {post.published ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Publiceret
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Kladde
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 hidden md:table-cell">
                    {formatDate(post.published_at || post.created_at)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleTogglePublish(post)}
                        className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
                        title={post.published ? 'Gør til kladde' : 'Publicer'}
                      >
                        {post.published ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                      <Link
                        to={`/admin/blog/edit/${post.id}`}
                        className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
                        title="Rediger"
                      >
                        <Pencil size={16} />
                      </Link>
                      <button
                        onClick={() => setDeleteConfirm(post)}
                        className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                        title="Slet"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete confirmation */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Slet indlæg?</h2>
            <p className="text-gray-500 text-sm mb-6">
              "{deleteConfirm.title_da || deleteConfirm.title_en}" vil blive permanent slettet.
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

export default AdminBlog;
