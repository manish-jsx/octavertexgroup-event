"use client";

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Model } from '../types'; // Adjust the path as needed

const AdminPanel = () => {
  const { data: session } = useSession();
  const [models, setModels] = useState<Model[]>([]); // Use the Model type here

  useEffect(() => {
    axios.get('/api/models').then((response) => {
      setModels(response.data);
    });
  }, []);

  if (!session) return <p>Access Denied</p>;

  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        {models.map((model) => (
          <li key={model.id}>{model.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
