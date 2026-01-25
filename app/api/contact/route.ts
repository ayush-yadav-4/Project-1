import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, company, message } = await req.json();

    const user = process.env.EMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'puneet@ailifebot.com';

    if (!user || !pass) {
      console.error('Missing email configuration (EMAIL_USER or GMAIL_APP_PASSWORD)');
      return NextResponse.json(
        { success: false, error: 'Server configuration error: Missing email credentials.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });

    // Verify connection configuration
    try {
      await transporter.verify();
      console.log('Transporter connection verified');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return NextResponse.json(
        { success: false, error: 'Failed to connect to email server.' },
        { status: 500 }
      );
    }

    const mailOptions = {
      from: user,
      to: recipientEmail, // Sending to puneet@ailifebot.com
      replyTo: email, // Allow replying to the sender
      subject: `Contact Form Submission from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #444;">New Contact Request</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #ccc; margin-top: 20px;">
            <strong>Message:</strong><br/>
            ${message}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
