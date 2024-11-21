// app/admin/dashboard.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';// Adjust the import based on your component library structure

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
            router.push('/admin'); // Redirect to sign-in if not authenticated
        } else {
            setIsAuthenticated(true);
            fetchPosts(token); // Fetch posts when authenticated
        }
    }, [router]);

    const fetchPosts = async (token) => {
        const res = await fetch('/api/posts', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (res.ok) {
            const data = await res.json();
            setPosts(data); // Assuming the API returns an array of posts
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        if (editingPostId) {
            // Update post
            await fetch(`/api/posts/${editingPostId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ title, content }),
            });
        } else {
            // Create new post
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
        fetchPosts(token); // Refresh posts list after submission
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
        fetchPosts(token); // Refresh posts list after deletion
    };

    if (!isAuthenticated) return null; // Render nothing until authentication is verified

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-4">
                <Input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                    required
                />
                <Button type="submit">{editingPostId ? 'Update Post' : 'Create Post'}</Button>
            </form>

            <h2 className="mt-8">Posts</h2>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post.id} className="border p-4 rounded">
                        <h3 className="font-bold">{post.title}</h3>
                        <p>{post.content}</p>
                        <div className="flex space-x-2 mt-2">
                            <Button onClick={() => handleEdit(post)}>Edit</Button>
                            <Button variant="destructive" onClick={() => handleDelete(post.id)}>Delete</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;