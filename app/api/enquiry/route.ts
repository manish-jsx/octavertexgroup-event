import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await sendEnquiryEmail(name, email, message);
    return NextResponse.json({ message: 'Enquiry submitted successfully' });
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    return NextResponse.json({ message: 'Error submitting enquiry' }, { status: 500 });
  }
}

async function sendEnquiryEmail(name: string, email: string, message: string) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_EMAIL_ADDRESS,
      pass: process.env.ZOHO_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.ZOHO_EMAIL_ADDRESS,
    to: process.env.ENQUIRY_EMAIL_ADDRESS, // Replace with your email address to receive enquiries
    subject: 'New Enquiry from Website',
    html: `
      <p>You have a new enquiry from:</p>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message:</p>
      <p>${message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
