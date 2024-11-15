import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { subject, text } = await request.json();

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const adminEmail = process.env.ADMIN_EMAIL;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword || !adminEmail) {
      throw new Error('Missing required environment variables');
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, 
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      tls: {
        rejectUnauthorized: false, 
      },
    });

    
    await transporter.sendMail({
      from: smtpUser,
      to: adminEmail,
      subject,
      text,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Error sending email', error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
