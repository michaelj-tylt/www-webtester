import { NextResponse } from 'next/server';
import { sendDemoRequest } from '@/lib/smtp';

export async function POST(request: Request) {
  const data = await request.json();
  
  console.log('API Route: Received data:', data);
  
  // Basic validation
  if (!data.name || !data.email || !data.revenue || !data.employees || !data.automation) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return NextResponse.json(
      { error: 'Invalid email format' },
      { status: 400 }
    );
  }
  
  // Send email notification
  try {
    const result = await sendDemoRequest({
      name: data.name,
      email: data.email,
      revenue: data.revenue,
      employees: data.employees,
      automation: data.automation,
      theme: data.theme || 'Unknown'
    });

    console.log('Email sent successfully via Postmark:', result.MessageID);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email notification' },
      { status: 500 }
    );
  }
}
