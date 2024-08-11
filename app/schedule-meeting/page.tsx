

// Add this at the top of the file to mark it as a Client Component
'use client';

import { useState } from 'react';
import axios from 'axios';

// Define the component
export default function ScheduleMeetingPage() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    meetingDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/schedule-meeting', formData);
      alert('Meeting scheduled successfully!');
    } catch (error) {
      console.error('Error scheduling meeting:', error);
      alert('Failed to schedule meeting.');
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Schedule a Zoom Meeting</h1>
      <form onSubmit={handleSubmit} className='max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg'>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2' htmlFor='customerName'>Full Name</label>
          <input
            type='text'
            id='customerName'
            name='customerName'
            value={formData.customerName}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2' htmlFor='customerEmail'>Email</label>
          <input
            type='email'
            id='customerEmail'
            name='customerEmail'
            value={formData.customerEmail}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2' htmlFor='meetingDate'>Meeting Date and Time</label>
          <input
            type='datetime-local'
            id='meetingDate'
            name='meetingDate'
            value={formData.meetingDate}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Schedule Meeting
        </button>
      </form>
    </div>
  );
}
