import * as postmark from 'postmark';

// Initialize Postmark client
export const postmarkClient = new postmark.ServerClient(
  process.env.POSTMARK_TOKEN || ''
);

export interface DemoRequestData {
  name: string;
  email: string;
  revenue: string;
  employees: string;
  automation: string;
  theme: string;
}

export async function sendDemoRequest(data: DemoRequestData) {
  const { name, email, revenue, employees, automation, theme } = data;
  
  return await postmarkClient.sendEmail({
    From: 'hello@whytylt.com',
    To: 'hello+ent-sales@whytylt.com',
    Subject: `Enterprise Sales Request from ${name}`,
    HtmlBody: `
      <h2>New Enterprise Sales Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Annual Revenue:</strong> ${revenue}</p>
      <p><strong>Employee Count:</strong> ${employees}</p>
      <p><strong>Page Theme:</strong> ${theme}</p>
      <h3>What would you automate away if you could?</h3>
      <p>${automation.replace(/\n/g, '<br>')}</p>
    `,
    TextBody: `
      New Enterprise Sales Request
      
      Name: ${name}
      Email: ${email}
      Annual Revenue: ${revenue}
      Employee Count: ${employees}
      Page Theme: ${theme}
      
      What would you automate away if you could?
      ${automation}
    `,
    MessageStream: 'outbound'
  });
}