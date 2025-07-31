import { NextResponse } from 'next/server';
import * as postmark from 'postmark';

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
    const token = process.env.POSTMARK_SERVER_TOKEN;
    if (!token) {
      throw new Error('POSTMARK_SERVER_TOKEN environment variable is not set');
    }
    
    const client = new postmark.ServerClient(token);
    
    const notificationEmail = process.env.NOTIFICATION_EMAIL!;
    
    const result = await client.sendEmail({
      From: notificationEmail,
      To: notificationEmail,
      Subject: 'New Contact Form Submission',
      HtmlBody: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Revenue:</strong> ${data.revenue}</p>
<p><strong>Employees:</strong> ${data.employees}</p>
<p><strong>Automation Needs:</strong> ${data.automation}</p>
      `,
      TextBody: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Revenue: ${data.revenue}
Employees: ${data.employees}
Automation Needs: ${data.automation}
      `,
      MessageStream: 'outbound'
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
