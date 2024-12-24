

import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Our terms of service govern your use of Octavertex Media services.',
};

export async function generateStaticParams() {
  return [{ params: {} }];
}

const TermsOfService: React.FC = () => {
  return (
    <main className="container mx-auto py-12 px-4 prose lg:prose-lg">
      <h1 className="text-3xl font-bold mb-4">Terms of Service for Octavertex Media</h1>
      <div>
        <p>
          <b>Effective Date:</b> October 26, 2023
        </p>

        <p>
          These Terms of Service ("Terms") govern your use of the services provided by Octavertex Media ("we," "us," or "our"). By accessing or using any part of our services, you agree to be bound by these Terms.  If you do not agree to these Terms, please do not use our services.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          Your use of our services signifies your acceptance of these Terms.  We reserve the right to modify these Terms at any time, and your continued use of our services following any modifications constitutes your acceptance of those changes.  Please review these Terms periodically for updates.
        </p>

        <h2>2. Description of Services</h2>
        <p>
          Our services include, but are not limited to, software development, workshops, and training programs.  A complete list of services is available on our website.
        </p>


        <h2>3. Account Creation and Use</h2>
        <p>
          Some services may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to use the services only for lawful purposes and in compliance with all applicable laws.
        </p>

        <h2>4. Payment and Billing</h2>
        <p>
          Payment terms, methods, and policies are detailed in our separate Payment Policy, which is incorporated herein by reference.  By using our services, you agree to pay all applicable fees in accordance with this policy.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All intellectual property rights (including copyrights, patents, and trademarks) related to our services, software, and materials remain with Octavertex Media or its licensors. You may not reproduce, distribute, or modify any of our materials without our explicit written permission.
        </p>


        <h2>6. Limitation of Liability</h2>
        <p>
          In no event shall Octavertex Media be liable for any incidental, consequential, or indirect damages arising from your use of our services.  Our liability is limited to the extent permitted by law.
        </p>


        <h2>7. Governing Law and Jurisdiction</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of [Your State/Country]. Any disputes arising out of or relating to these Terms shall be resolved exclusively in the courts of [Your State/Country].
        </p>

        <h2>8. Entire Agreement</h2>
        <p>
          These Terms constitute the entire agreement between you and Octavertex Media regarding your use of our services, superseding all prior or contemporaneous communications and proposals.
        </p>


        <h2>9. Contact Us</h2>
        <p>
          For any questions or concerns regarding these Terms of Service, please contact us at [Your Contact Email Address].
        </p>
      </div>
    </main>
  );
};

export default TermsOfService;
