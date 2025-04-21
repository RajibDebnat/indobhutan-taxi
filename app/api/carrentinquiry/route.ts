import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Set up SendGrid transporter
const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey", // This is literally "apikey"
    pass: process.env.SENDGRID_API_KEY!, // Use your actual SendGrid API key from environment variables
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, phone, message, car } = await req.json();

    if (!name || !phone || !car) {
      return NextResponse.json(
        { message: "Name, phone, and car are required." },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: process.env.FROM!, // Replace with your verified sender email
      to: process.env.TO, // Replace with your email to receive inquiries
      subject: `New Car Rental Inquiry: ${car}`,
      html: `
        <h3>New Car Rental Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Car:</strong> ${car}</p>
        <p><strong>Message:</strong><br/>${message || "No message provided."}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Inquiry email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "Failed to send inquiry. Please try again." },
      { status: 500 }
    );
  }
}
