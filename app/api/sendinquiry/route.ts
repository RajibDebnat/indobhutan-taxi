// app/api/sendinquiry/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { message: 'Name and phone are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey', // SendGrid's SMTP username is always 'apikey'
        pass: process.env.SENDGRID_API_KEY!,
      },
    });

    await transporter.sendMail({
      from: process.env.FROM as string,
      to: process.env.TO as string,
      subject: 'New Inquiry for Tour Package',
      text: `You have received an inquiry from ${name} with phone number: ${phone}`,
      html: `<p>You have received an inquiry from <strong>${name}</strong> with phone number: <strong>${phone}</strong></p>`,
    });

    return NextResponse.json({ message: 'Inquiry sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send inquiry.' },
      { status: 500 }
    );
  }
}
