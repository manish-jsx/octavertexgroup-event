// Add this line at the very top of your file
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    photo: '',
    bio: '',
    whyBold: '',
    experience: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
    <Navbar/>
    <div className='container mx-auto p-4'>
       
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg'
      >
        <h1 className='text-2xl font-bold mb-4'>Welcome Bold Models!</h1>
        <p className='mb-4'>
          Thank you for your interest in joining our exciting new project in Bhubaneswar. We're on the lookout for dynamic, confident individuals who are ready to take the fashion world by storm. This is a fantastic opportunity to showcase your unique style and get paid for doing what you love.
        </p>
        <p className='mb-4'>
          Please fill out the form below with your details. This will help us get to know you better and assess if you're a fit for our upcoming assignments.
        </p>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='name'>Full Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='contact'>Contact Information</label>
            <input
              type='text'
              id='contact'
              name='contact'
              value={formData.contact}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='photo'>Upload Your Best Photo</label>
            <input
              type='file'
              id='photo'
              name='photo'
              onChange={(e) => handleChange({ target: { name: 'photo', value: e.target.files ? e.target.files[0].name : '' } } as React.ChangeEvent<HTMLInputElement>)}
              className='w-full p-2 border border-gray-300 rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='bio'>Brief Bio</label>
            <textarea
              id='bio'
              name='bio'
              value={formData.bio}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='whyBold'>Why Do You Think You're Bold Enough?</label>
            <textarea
              id='whyBold'
              name='whyBold'
              value={formData.whyBold}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='experience'>Previous Modeling Experience (if applicable)</label>
            <textarea
              id='experience'
              name='experience'
              value={formData.experience}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
    <Footer/>
    </div>
  );
};

export default Registration;
