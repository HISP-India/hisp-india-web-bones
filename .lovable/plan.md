

# Plan: Resume Submission Form on Careers Page

## Overview
Create a resume submission dialog form triggered by the "Send Us Your Resume" button, with acknowledgement and notification emails via a new edge function — following the same pattern as the contact and schedule-a-call forms.

## Changes

### 1. Create `src/components/ResumeSubmitDialog.tsx`
- Dialog component with fields: First Name, Last Name, Email, Phone, Position of Interest (dropdown with current job titles + "General/Open Application"), Cover Letter/Message (textarea), Resume Upload (file input accepting PDF/DOC/DOCX)
- Since Brevo doesn't support file attachments easily without base64, we'll convert the uploaded resume to base64 and send it as an attachment in the notification email
- Zod validation for required fields
- Calls `supabase.functions.invoke('send-resume-email', { body: formData })`

### 2. Create `supabase/functions/send-resume-email/index.ts`
- Same pattern as `send-contact-email` and `send-schedule-call-email`
- **Acknowledgement email** to applicant: Thank them, summarize position of interest
- **Notification email** to `sahil.bhardwaj@hispindia.org`: All details + resume as Brevo attachment (base64)
- CORS headers, validation, BREVO_API_KEY

### 3. Update `supabase/config.toml`
- Add `[functions.send-resume-email]` with `verify_jwt = false`

### 4. Update `src/pages/Careers.tsx`
- Replace the "Send Us Your Resume" `<Link to="/contact">` with `ResumeSubmitDialog` wrapping the button

### 5. Deploy the edge function

