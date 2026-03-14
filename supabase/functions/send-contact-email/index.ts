import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY');
    if (!BREVO_API_KEY) {
      throw new Error('BREVO_API_KEY is not configured');
    }

    const { name, email, organization, subject, message }: ContactFormData = await req.json();

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: 'All required fields must be filled' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email address' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const senderEmail = 'contact@hispindia.org';

    // 1. Send acknowledgement email to the submitter
    const ackResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'HISP India', email: senderEmail },
        to: [{ email: email, name: name }],
        subject: `Thank you for contacting HISP India`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #0891b2; padding: 24px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">HISP India</h1>
            </div>
            <div style="padding: 32px 24px;">
              <p>Dear ${name},</p>
              <p>Thank you for reaching out to HISP India. We have received your message regarding <strong>"${subject}"</strong> and will get back to you shortly.</p>
              <p>Here's a summary of your submission:</p>
              <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Subject</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${subject}</td></tr>
                ${organization ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Organization</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${organization}</td></tr>` : ''}
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Message</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${message}</td></tr>
              </table>
              <p>Best regards,<br/>HISP India Team</p>
            </div>
            <div style="background-color: #f3f4f6; padding: 16px; text-align: center; font-size: 12px; color: #6b7280;">
              <p>HISP India | DLF Tower B, 12th Floor, Jasola, New Delhi-110025</p>
            </div>
          </div>
        `,
      }),
    });

    if (!ackResponse.ok) {
      const ackError = await ackResponse.text();
      console.error('Brevo ack email failed:', ackError);
      throw new Error(`Failed to send acknowledgement email [${ackResponse.status}]: ${ackError}`);
    }

    // 2. Send notification email to HISP India
    const notifResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'HISP India Website', email: senderEmail },
        to: [{ email: senderEmail, name: 'HISP India' }],
        replyTo: { email: email, name: name },
        subject: `New Contact Form: ${subject}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #0891b2; padding: 24px;">
              <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
            </div>
            <div style="padding: 24px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td></tr>
                ${organization ? `<tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Organization</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${organization}</td></tr>` : ''}
                <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Subject</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Message</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${message}</td></tr>
              </table>
              <p style="margin-top: 16px; color: #6b7280; font-size: 13px;">You can reply directly to this email to respond to ${name}.</p>
            </div>
          </div>
        `,
      }),
    });

    if (!notifResponse.ok) {
      const notifError = await notifResponse.text();
      console.error('Brevo notification email failed:', notifError);
      // Don't throw - ack was sent successfully
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Emails sent successfully' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Error in send-contact-email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
