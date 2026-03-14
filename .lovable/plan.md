

## Brevo Email Integration for Contact Form

### What We'll Build

When a user submits the Contact form, two emails will be sent via Brevo's API:
1. **Acknowledgement email** to the submitter confirming receipt
2. **Notification email** to HISP India (contact@hispindia.org) with the form submission details

### Architecture

```text
Contact Form (React)
       │
       ▼
Supabase Edge Function (/send-contact-email)
       │
       ▼
Brevo Transactional Email API (api.brevo.com/v3/smtp/email)
       │
       ├── Email to submitter (acknowledgement)
       └── Email to HISP India (notification)
```

### Steps

1. **Enable Lovable Cloud** — needed for Supabase Edge Functions
2. **Store Brevo API key** as a runtime secret (`BREVO_API_KEY`)
3. **Create Edge Function** `send-contact-email` that:
   - Validates input (name, email, subject, message, organization)
   - Sends acknowledgement email to the user via Brevo
   - Sends notification email to contact@hispindia.org with submission details
   - Returns success/error response with CORS headers
4. **Update Contact.tsx** to:
   - Add form state management with React Hook Form + Zod validation
   - Call the edge function on submit
   - Show loading state and success/error toast notifications

### Prerequisites from You

- A **Brevo account** with a transactional email API key (found in Brevo → Settings → API Keys)
- A **verified sender email** in Brevo (e.g., contact@hispindia.org or noreply@hispindia.org)

