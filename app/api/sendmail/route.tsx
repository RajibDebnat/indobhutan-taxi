import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  const body = await req.json();
  const {
    name,
    email,
    phone,
    from,
    to,
    pickupDate,
    pickupTime,
    tripType,
    message,
  } = body;

  const msg = {
    to: process.env.TO as string, // Your email to receive the booking
    from:process.env.FROM as string, // Must be a verified sender in SendGrid
    subject: `New Cab Booking Request - ${tripType}`,
    html: `
      <h2>New Cab Booking</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Trip Type:</strong> ${tripType}</p>
      <p><strong>From:</strong> ${from}</p>
      <p><strong>To:</strong> ${to}</p>
      <p><strong>Pickup Date:</strong> ${pickupDate}</p>
      <p><strong>Pickup Time:</strong> ${pickupTime}</p>
      <p><strong>Message:</strong> ${message || "N/A"}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("SendGrid Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
