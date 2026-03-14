import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface ResumeFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  position: string;
  coverLetter?: string;
  resumeBase64: string;
  resumeFileName: string;
  resumeContentType: string;
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

    const { firstName, lastName, email, phone, position, coverLetter, resumeBase64, resumeFileName, resumeContentType }: ResumeFormData = await req.json();

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !position?.trim() || !resumeBase64 || !resumeFileName) {
      return new Response(
        JSON.stringify({ success: false, error: 'All required fields must be filled' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email address' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const senderEmail = 'sahil.bhardwaj@hispindia.org';
    const fullName = `${firstName.trim()} ${lastName.trim()}`;

    // 1. Acknowledgement email to applicant
    const ackResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'HISP India', email: senderEmail },
        to: [{ email, name: fullName }],
        subject: 'Thank you for your application – HISP India',
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #0891b2; padding: 24px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">HISP India</h1>
            </div>
            <div style="padding: 32px 24px;">
              <p>Dear ${firstName.trim()},</p>
              <p>Thank you for submitting your application to HISP India for the position: <strong>${position}</strong>.</p>
              <p>We have received your resume and our team will review it carefully. If your profile matches our requirements, we will reach out to you for the next steps.</p>
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

    // 2. Notification email to HISP India with resume attachment
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
        replyTo: { email, name: fullName },
        subject: `New Resume Submission: ${fullName} – ${position}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #0891b2; padding: 24px;">
              <h1 style="color: white; margin: 0; font-size: 20px;">New Resume Submission</h1>
            </div>
            <div style="padding: 24px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Name</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${fullName}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td></tr>
                ${phone ? `<tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td></tr>` : ''}
                <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Position</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${position}</td></tr>
                ${coverLetter ? `<tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Cover Letter</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${coverLetter}</td></tr>` : ''}
                <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Resume</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${resumeFileName} (attached)</td></tr>
              </table>
              <p style="margin-top: 16px; color: #6b7280; font-size: 13px;">You can reply directly to this email to respond to ${fullName}.</p>
            </div>
          </div>
        `,
        attachment: [
          {
            content: resumeBase64,
            name: resumeFileName,
            type: resumeContentType || 'application/pdf',
          },
        ],
      }),
    });

    if (!notifResponse.ok) {
      const notifError = await notifResponse.text();
      console.error('Brevo notification email failed:', notifError);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Application submitted successfully' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Error in send-resume-email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
