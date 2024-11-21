// app/api/auth/route.js
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export async function POST(req) {
    const { username, password, action } = await req.json();

    if (action === 'login') {
        const userQuery = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (userQuery.rows.length > 0) {
            const user = userQuery.rows[0];
            if (await bcrypt.compare(password, user.password)) {
                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
                return new Response(JSON.stringify({ token }), { status: 200 });
            }
        }
        return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
    }

    return new Response('Method Not Allowed', { status: 405 });
}