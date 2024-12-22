// import { Metadata } from 'next';
// import React from 'react';


// export const metadata: Metadata = {
//   title: 'Privacy Policy',
// };

// export async function generateStaticParams() {
//   return [
//     {
//       params: {},
//     },
//   ];
// }

// const PrivacyPolicy: React.FC = () => {
//   return (
   
//       <main className="container mx-auto py-12">
//         <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
//         <p className="mb-4">Information about your privacy policy...</p>
//       </main>
  
//   );
// };

// export default PrivacyPolicy;

import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn about how Octavertex Media protects your data.',
};

export async function generateStaticParams() {
  return [{ params: {} }];
}

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy </h1>
      <div className="prose lg:prose-lg">
        <p>
          Effective Date: October 26, 2023
        </p>

        <p>
          At Octavertex Media, we value your privacy. This policy explains how we collect, use, and protect the personal information you share with us. By using our services, you consent to the practices described below.
        </p>

        <h2>1. Information We Collect</h2>

        <p>
          We collect information in various ways, depending on your interaction with us. This includes information you provide directly, such as through contact forms, project inquiries, and feedback, as well as information automatically collected, including:
        </p>

        <ul>
          <li><b>Contact Information:</b> Name, email address, phone number, company details, etc.</li>
          <li><b>Project Details:</b>  Project specifications, budgets, deadlines.</li>
          <li><b>Usage Data:</b> Website activity, page views, interaction with services.</li>
          <li><b>Technical Data:</b> IP address, browser type, device information, referring/exit pages.</li>
          <li><b>Cookies and Similar Technologies:</b> We use cookies to enhance your experience and personalize content. You can manage cookie settings through your browser.</li>
          <li><b>Other Interactions:</b>  Information from support tickets, training registration, and any other communications.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>

        <p>
          We use the collected information to:
        </p>

        <ul>
          <li>Provide and improve our services.</li>
          <li>Communicate with you regarding your projects, requests, and updates.</li>
          <li>Improve the quality and performance of our services based on your feedback.</li>
          <li>Comply with legal and regulatory requirements.</li>
          <li>Protect our systems and data.</li>
          <li>Analyze trends and improve our products.</li>
          <li>Send you marketing communications if you've opted in.</li>
        </ul>

        <h2>3. Sharing Your Information</h2>

        <p>
          We may share your information with trusted third-party service providers who assist us in providing services.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We take reasonable precautions to protect your personal information.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You have the right to access, update, and delete your personal information. Contact us for more information on how to exercise these rights.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          For any inquiries about this policy, contact us at [Insert Contact Email Address].
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
