import { NextResponse } from 'next/server';
import axios from 'axios';
import nodemailer from 'nodemailer';
import qs from 'qs';

export async function POST(request: Request) {
  const { customerName, customerEmail, meetingDate } = await request.json();

  try {
    const zoomAccessToken = await getZoomAccessToken();
    const zoomResponse = await axios.post(
      'https://api.zoom.us/v2/users/me/meetings',
      {
        topic: 'Scheduled Zoom Meeting',
        type: 2, // Scheduled meeting
        start_time: meetingDate,
        duration: 30,
      },
      {
        headers: {
          Authorization: `Bearer ${zoomAccessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const zoomMeetingLink = zoomResponse.data.join_url;
    await sendConfirmationEmail(customerName, customerEmail, zoomMeetingLink);

    return NextResponse.json({ message: 'Meeting scheduled successfully' });
  } catch (error) {
    console.error('Error scheduling meeting:', error);
    return NextResponse.json({ message: 'Error scheduling meeting' }, { status: 500 });
  }
}

async function getZoomAccessToken() {
  const data = qs.stringify({
    grant_type: 'account_credentials',
    account_id: process.env.ZOOM_ACCOUNT_ID,
  });

  const response = await axios.post('https://zoom.us/oauth/token', data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`).toString('base64')}`,
    },
  });

  return response.data.access_token;
}

async function sendConfirmationEmail(customerName: string, customerEmail: string, zoomMeetingLink: string) {
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
    to: customerEmail,
    subject: 'Zoom Meeting Confirmation',
    html: `
      <p>Hello ${customerName},</p>
      <p>Your Zoom meeting has been scheduled successfully.</p>
      <p>Meeting Link: <a href="${zoomMeetingLink}">${zoomMeetingLink}</a></p>
      <p>Thank you!</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
