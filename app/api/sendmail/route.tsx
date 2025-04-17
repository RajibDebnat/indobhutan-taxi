import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const { tripType, from, to, date, time } = body;

  // Setup transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER, // your email
      pass: process.env.MAIL_PASS, // your app password
    },
  });

  const mailOptions = {
    from: `"Cab Booking Form" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: `New Booking - ${tripType}`,
    html: `
      <h2>New Cab Booking Request</h2>
      <p><strong>Trip Type:</strong> ${tripType}</p>
      <p><strong>From:</strong> ${from}</p>
      <p><strong>To:</strong> ${to}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
