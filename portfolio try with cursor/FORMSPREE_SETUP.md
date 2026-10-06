# Formspree Contact Form Setup Guide

This guide will help you set up the contact form to send emails directly to your inbox.

## Recipient Emails

Your contact form will send messages to:
- **Primary:** maintellitechnologies@gmail.com
- **Secondary:** ekemartinudochukwu4@gmail.com

## Quick Setup (5 Minutes)

### Step 1: Create Formspree Account

1. Visit [https://formspree.io](https://formspree.io)
2. Click **"Sign Up"** in the top right
3. Choose to sign up with Google or create an account with email/password
4. Verify your email address when prompted

### Step 2: Create Your Form

1. After logging in, click the **"New Form"** button
2. Enter a form name, e.g., "Portfolio Contact Form"
3. Click **"Create Form"**

### Step 3: Configure Email Recipients

1. After creating the form, you'll see your form dashboard
2. Click on the **"Emails"** tab in the left sidebar
3. In the "To" field, add both email addresses:
   ```
   maintellitechnologies@gmail.com, ekemartinudochukwu4@gmail.com
   ```
4. (Optional) Customize the email subject line. Default: "New Portfolio Inquiry - Portfolio Website"
5. Click **"Save"**

**Important:** Formspree automatically sets the "Reply-to" field to the sender's email address, so you can reply directly to messages.

### Step 4: Get Your Form ID

1. On your form dashboard, look for the **"Endpoint"** or **"Form ID"**
2. It will look like: `https://formspree.io/f/abc123xyz`
3. Copy the ID part (everything after `/f/`)
   - Example: If your endpoint is `https://formspree.io/f/xvdpqzky`, your ID is `xvdpqzky`

### Step 5: Update Your Website

1. Open `index.html` in your code editor
2. Search for `YOUR_FORMSPREE_ID` (around line 519)
3. Replace it with your actual Formspree ID

**Before:**
```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
```

**After:**
```html
<form id="contact-form" action="https://formspree.io/f/xvdpqzky" method="POST">
```

4. Save the file

### Step 6: Test Your Form

1. Open your website in a browser
2. Scroll to the Contact section
3. Fill out the form with test information:
   - Name: Test User
   - Email: your-test-email@gmail.com
   - Subject: Test Message
   - Message: This is a test of the contact form
4. Click **"Send Message"**
5. You should see a success message: "Message sent successfully. I'll get back to you as soon as possible."
6. Check both email accounts (inbox and spam folder) for the test message

## What You'll Receive

Each submission will arrive as an email with:

**Subject:** New Portfolio Inquiry - [Visitor's Subject]

**Body:**
```
Name: [Visitor's Name]
Email: [Visitor's Email]
Subject: [Visitor's Subject]
Message: [Visitor's complete message]

Submitted: [Date and time]
```

The email will be from Formspree, but the **Reply-to** address will be the visitor's email, allowing you to respond directly.

## Formspree Free Tier

The free plan includes:
- **50 submissions per month**
- Unlimited forms
- Basic spam protection
- Email notifications
- Submission history

This is perfect for personal portfolios. If you expect more traffic, you can upgrade to a paid plan.

## Advanced Configuration (Optional)

### Custom Email Template

1. Go to your Formspree form dashboard
2. Click on the **"Emails"** tab
3. Scroll to "Email Template"
4. Customize the HTML template to match your branding
5. Click **"Save"**

### Add Spam Protection

Formspree includes built-in spam protection, but you can enhance it:

1. Go to your form dashboard
2. Click on **"Settings"**
3. Enable "Honeypot field" (invisible field that bots fill out)
4. Enable "reCAPTCHA" if you want extra protection

### View Submission History

1. Go to your Formspree dashboard
2. Click on your form
3. Click on the **"Submissions"** tab
4. View all past submissions with timestamps and details

### Disable the Form Temporarily

If you're overwhelmed with messages or need to pause:

1. Go to your Formspree dashboard
2. Click on your form
3. Click on **"Settings"**
4. Toggle "Disable Form" to ON
5. The form on your website will show a "Form is disabled" message

## Troubleshooting

### Form shows error on submission

**Possible causes:**
- Invalid Formspree ID
- Formspree account suspended
- Exceeded monthly submission limit
- Network connectivity issues

**Solutions:**
1. Verify your Formspree ID is correct in `index.html`
2. Check your Formspree account status
3. Check your submission limit in Formspree dashboard
4. Test your internet connection

### Not receiving emails

**Possible causes:**
- Emails going to spam
- Incorrect recipient email addresses
- Email service blocking Formspree
- Formspree delivery issues

**Solutions:**
1. Check spam/junk folders
2. Verify recipient emails in Formspree form settings
3. Add Formspree to your email contacts/whitelist
4. Check Formspree delivery logs in dashboard

### Form shows success but no email arrives

**Possible causes:**
- Email delivery delay
- Email service blocking
- Incorrect recipient configuration

**Solutions:**
1. Wait 5-10 minutes (email delivery can be delayed)
2. Check Formspree submission history to confirm it was sent
3. Verify recipient emails in Formspree settings
4. Contact Formspree support if issue persists

### Button stays in "Sending..." state

**Possible causes:**
- JavaScript error
- Network timeout
- Formspree API down

**Solutions:**
1. Open browser console (F12) and check for errors
2. Refresh the page and try again
3. Check Formspree status page for outages

## Security Notes

✅ **Secure:** No API keys or credentials are exposed in your frontend code
✅ **Private:** Your email addresses are only stored on Formspree's servers
✅ **Protected:** Built-in spam filtering and rate limiting
✅ **Reliable:** Enterprise-grade email delivery infrastructure

## Need Help?

- **Formspree Documentation:** [https://formspree.io/docs](https://formspree.io/docs)
- **Formspree Support:** support@formspree.io

## Testing Checklist

Before going live, verify:

- [ ] Formspree account created and verified
- [ ] Form created in Formspree dashboard
- [ ] Recipient emails configured (both addresses)
- [ ] Form ID updated in `index.html`
- [ ] Test submission completed successfully
- [ ] Test email received in both inboxes
- [ ] Reply-to functionality tested (respond to test email)
- [ ] Mobile form submission tested
- [ ] Desktop form submission tested

Once all items are checked, your contact form is ready for production!