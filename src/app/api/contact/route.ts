import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, _gotcha } = body;

    // Honeypot check
    if (_gotcha) {
      return NextResponse.json({ success: true, message: 'Bot detected' }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Simulate sending to email service (e.g., Resend, SendGrid)
    // In production, uncomment and configure:
    // await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
    //   body: JSON.stringify({ ... })
    // });

    console.log('Contact Form Submission:', { name, email, phone, message });

    return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}