

// app/admin/dashboard.js
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Edit2, Trash2, LogOut } from 'lucide-react';

// Reusable component
const GlassCard = ({ children, className = '' }) => (
  <div className={`backdrop-blur-md bg-black/30 rounded-xl border border-white/10 shadow-lg ${className}`}>
    {children}
  </div>
);

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
      fetchPosts(token);
    }
  }, [router]);

  const fetchPosts = async (token) => {
    const res = await fetch('/api/posts', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      setPosts(data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    if (editingPostId) {
      await fetch(`/api/posts/${editingPostId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content }),
      });
    } else {
      await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content }),
      });
    }

    setTitle('');
    setContent('');
    setEditingPostId(null);
    fetchPosts(token);
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditingPostId(post.id);
  };

  const handleDelete = async (postId) => {
    const token = localStorage.getItem('token');
    await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    fetchPosts(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/admin');
  };

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Admin Dashboard
          </h1>
          <Button 
            onClick={handleLogout}
            className="bg-red-500/20 hover:bg-red-500/30 text-white"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <GlassCard className="p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post Title"
              className="bg-white/5 border-white/10 text-white placeholder-white/50"
              required
            />
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Post Content"
              className="bg-white/5 border-white/10 text-white placeholder-white/50 min-h-[120px]"
              required
            />
            <Button 
              type="submit"
              className="bg-blue-500/20 hover:bg-blue-500/30 text-white w-full"
            >
              {editingPostId ? (
                <>
                  <Edit2 className="w-4 h-4 mr-2" />
                  Update Post
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Post
                </>
              )}
            </Button>
          </form>
        </GlassCard>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <GlassCard key={post.id} className="p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-white/80 mb-4">{post.content}</p>
              <div className="flex space-x-2">
                <Button
                  onClick={() => handleEdit(post)}
                  className="flex-1 bg-white/5 hover:bg-white/10"
                >
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(post.id)}
                  className="flex-1 bg-red-500/20 hover:bg-red-500/30"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;