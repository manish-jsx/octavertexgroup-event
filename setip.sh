#!/bin/bash

# Define the base directory
BASE_DIR="app"

# Create necessary directories
mkdir -p $BASE_DIR/about
mkdir -p $BASE_DIR/contact-us
mkdir -p $BASE_DIR/portfolio
mkdir -p $BASE_DIR/privacy-policy
mkdir -p $BASE_DIR/terms-of-service
mkdir -p $BASE_DIR/registration

# Create page files with basic content
echo "import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export async function generateStaticParams() {
  return [
    {
      params: {},
    },
  ];
}

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </div>
  );
}" > $BASE_DIR/about/page.tsx

echo "import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export async function generateStaticParams() {
  return [
    {
      params: {},
    },
  ];
}

export default function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>This is the contact us page.</p>
    </div>
  );
}" > $BASE_DIR/contact-us/page.tsx

echo "import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
};

export async function generateStaticParams() {
  return [
    {
      params: {},
    },
  ];
}

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>This is the portfolio page.</p>
    </div>
  );
}" > $BASE_DIR/portfolio/page.tsx

echo "import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export async function generateStaticParams() {
  return [
    {
      params: {},
    },
  ];
}

export default function PrivacyPolicy() {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>This is the privacy policy page.</p>
    </div>
  );
}" > $BASE_DIR/privacy-policy/page.tsx

echo "import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export async function generateStaticParams() {
  return [
    {
      params: {},
    },
  ];
}

export default function TermsOfService() {
  return (
    <div>
      <h1>Terms of Service</h1>
      <p>This is the terms of service page.</p>
    </div>
  );
}" > $BASE_DIR/terms-of-service/page.tsx

echo "import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Registration',
};

export async function generateStaticParams() {
  return [
    {
      params: {},
    },
  ];
}

export default function Registration() {
  return (
    <div>
      <h1>Registration</h1>
      <p>This is the registration page.</p>
    </div>
  );
}" > $BASE_DIR/registration/page.tsx

# Create global CSS file
mkdir -p styles
echo "/* Add your global styles here */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}" > styles/globals.css

# Create main layout file
echo "import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}" > $BASE_DIR/layout.tsx

echo "All files and directories have been created successfully."
