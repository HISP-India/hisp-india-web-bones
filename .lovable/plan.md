

## Update Sender and Notification Email

Change both the **sender address** and **notification recipient** to `sahil.bhardwaj@hispindia.org` in the edge function.

### Changes

**`supabase/functions/send-contact-email/index.ts`**:
- Update `senderEmail` constant from `contact@hispindia.org` to `sahil.bhardwaj@hispindia.org`
- Update notification `to` recipient to `sahil.bhardwaj@hispindia.org`

Since `senderEmail` is used as the `sender` for both emails and as the notification recipient, changing it to `sahil.bhardwaj@hispindia.org` covers all cases. Redeploy the function after the change.

