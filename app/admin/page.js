// app/admin/page.js
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button'; // Update this import based on your component library structure
import {Input} from '@/components/ui/input';
import { useRouter } from 'next/navigation';

const AdminSignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const res = await fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, action: 'login' }),
        });

        if (res.ok) {
            const data = await res.json();
            localStorage.setItem('token', data.token); // Store token for future requests
            router.push('/admin/dashboard'); // Redirect to admin dashboard after login
        } else {
            const errorData = await res.json();
            setError(errorData.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">Admin Sign In</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-4">
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                {error && <p className="text-red-500">{error}</p>}
                <Button type="submit">Sign In</Button>
            </form>
        </div>
    );
};

export default AdminSignIn;