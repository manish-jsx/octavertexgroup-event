'use client';

import { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResumeUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'success' | 'error' | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    // Implement your file upload logic here
    try {
      // Simulated upload
      await new Promise(resolve => setTimeout(resolve, 2000));
      setUploadStatus('success');
    } catch (error) {
      setUploadStatus('error');
    }
    setUploading(false);
  };

  return (
    <section className="py-16 px-4 bg-[rgba(24,204,252,0.02)]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent 
          bg-gradient-to-r from-[#18CCFC] to-[#6344F5]">
          Don't see a perfect fit?
        </h2>
        <p className="mt-4 text-[rgb(199,210,254)]/70">
          Send us your resume and we'll keep you in mind for future opportunities.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 p-6 rounded-xl border border-dashed border-[rgba(24,204,252,0.2)]
            bg-[rgba(24,204,252,0.03)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center">
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="resume"
              className="cursor-pointer group p-4 flex flex-col items-center"
            >
              <Upload className="w-8 h-8 text-[#18CCFC] group-hover:scale-110 transition-transform" />
              <span className="mt-2 text-white">
                {file ? file.name : 'Upload your resume'}
              </span>
              <span className="mt-1 text-sm text-[rgb(199,210,254)]/50">
                PDF, DOC, DOCX (max 5MB)
              </span>
            </label>

            {file && (
              <button
                type="submit"
                disabled={uploading}
                className={`mt-4 px-6 py-2 rounded-lg bg-[#18CCFC] text-white
                  hover:bg-[#18CCFC]/90 transition-colors ${
                    uploading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                {uploading ? 'Uploading...' : 'Submit Resume'}
              </button>
            )}

            {/* Status Messages */}
            {uploadStatus && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-4 flex items-center gap-2 ${
                  uploadStatus === 'success' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {uploadStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Resume uploaded successfully!</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Upload failed. Please try again.</span>
                  </>
                )}
              </motion.div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
