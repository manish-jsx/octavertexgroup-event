// app/api/posts/route.js
import { Pool } from 'pg';
import jwt from 'jsonwebtoken';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Handle GET and POST requests for posts
export async function GET(req) {
    try {
        const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
        return new Response(JSON.stringify(result.rows), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Error fetching posts' }), { status: 500 });
    }
}

export async function POST(req) {
    const { title, content } = await req.json();
    const token = req.headers.get('Authorization')?.split(' ')[1];

    if (!token) return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        await pool.query('INSERT INTO posts (title, content, author_id) VALUES ($1, $2, $3)', [title, content, decoded.id]);
        return new Response(JSON.stringify({ message: 'Post created' }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Invalid token' }), { status: 403 });
    }
}

// Handle PUT and DELETE requests for specific posts
export async function PUT(req) {
    const { title, content } = await req.json();
    const postId = req.url.split('/').pop(); // Get post ID from URL
    const token = req.headers.get('Authorization')?.split(' ')[1];

    if (!token) return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        
        await pool.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3', [title, content, postId]);
        
        return new Response(JSON.stringify({ message: 'Post updated' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Invalid token or error updating post' }), { status: 403 });
    }
}

export async function DELETE(req) {
    const postId = req.url.split('/').pop(); // Get post ID from URL
    const token = req.headers.get('Authorization')?.split(' ')[1];

    if (!token) return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        
        await pool.query('DELETE FROM posts WHERE id = $1', [postId]);
        
        return new Response(JSON.stringify({ message: 'Post deleted' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Invalid token or error deleting post' }), { status: 403 });
    }
}