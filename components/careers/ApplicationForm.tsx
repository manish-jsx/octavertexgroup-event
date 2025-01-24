"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Loader2 } from 'lucide-react';

interface ApplicationFormProps {
  jobId: string;
  jobTitle: string;
}

export function ApplicationForm({ jobId, jobTitle }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    coverLetter: '',
    resume: null as File | null,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Implement your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-xl bg-[rgba(24,204,252,0.03)] border border-[rgba(24,204,252,0.1)]"
    >
      <h3 className="text-2xl font-semibold text-white mb-6">
        Apply for {jobTitle}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[rgb(199,210,254)]/70">Full Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg bg-[rgba(24,204,252,0.05)] 
                border border-[rgba(24,204,252,0.1)] text-white
                focus:outline-none focus:border-[#18CCFC]/30"
            />
          </div>
          
          {/* Add more form fields... */}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full md:w-auto px-8 py-3 bg-[#18CCFC] text-white rounded-lg
            hover:bg-[#18CCFC]/90 transition-colors font-semibold disabled:opacity-50
            disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </button>
      </form>
    </motion.div>
  );
}
