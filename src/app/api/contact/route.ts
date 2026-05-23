import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, phone, projectType, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Resolute Homes Contact Form <onboarding@resend.dev>",
      to: ["resolutehomesllc@gmail.com"],
      reply_to: email,
      subject: `New consultation request from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #1f1a17; margin-bottom: 8px;">New Contact Form Submission</h2>
          <p style="color: #8c6a43; font-size: 13px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 32px;">Resolute Homes · resolutehomeshsv.com</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e6dac9; color: #5b5148; font-size: 13px; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e6dac9; color: #1f1a17; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e6dac9; color: #5b5148; font-size: 13px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e6dac9; color: #1f1a17; font-weight: 600;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e6dac9; color: #5b5148; font-size: 13px;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e6dac9; color: #1f1a17; font-weight: 600;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e6dac9; color: #5b5148; font-size: 13px;">Project Type</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e6dac9; color: #1f1a17; font-weight: 600;">${projectType || "Not specified"}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #5b5148; font-size: 13px; margin-bottom: 8px;">Message</p>
            <div style="background: #f6f1e8; border-radius: 12px; padding: 16px; color: #1f1a17; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</div>
          </div>
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e6dac9;">
            <a href="mailto:${email}" style="background: #1f1a17; color: white; padding: 12px 24px; border-radius: 100px; text-decoration: none; font-size: 14px; font-weight: 600;">Reply to ${name}</a>
          </div>
        </div>
      `,
    }),
  });

  if (!res.ok) {
    const error = await res.json();
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
