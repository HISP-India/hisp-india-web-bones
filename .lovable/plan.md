

# Plan: Add Email Notifications for Schedule a Call Form

## Overview
Create a new edge function `send-schedule-call-email` that sends both an acknowledgement email to the submitter and a notification email to HISP India (same pattern as the contact form). Then update the `ScheduleCallDialog` to invoke it.

## Changes

### 1. Create Edge Function `supabase/functions/send-schedule-call-email/index.ts`
- Mirror the `send-contact-email` pattern using Brevo API with `BREVO_API_KEY`
- Accept all form fields: firstName, lastName, email, country, url, phone, dhis2Interest, domain, services
- **Acknowledgement email** to submitter: Thank them for scheduling a call, summarize their selections (domain, services, DHIS2 interest)
- **Notification email** to `sahil.bhardwaj@hispindia.org`: Include all submitted fields in a table, with replyTo set to submitter's email
- Same CORS headers, validation, and error handling as contact form

### 2. Update `supabase/config.toml`
- Add `[functions.send-schedule-call-email]` with `verify_jwt = false`

### 3. Update `src/components/ScheduleCallDialog.tsx`
- Replace the simulated `setTimeout` with `supabase.functions.invoke('send-schedule-call-email', { body: form })`
- Import supabase client
- Handle success/error responses properly

### 4. Deploy
- Deploy the new edge function

