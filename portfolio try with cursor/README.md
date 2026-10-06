# Eke MartinFavour U. — Personal Portfolio

Premium dark-themed portfolio for **Eke MartinFavour U.**, Front-End Engineer, Forex Trader, CEO, Real Estate Consultant, and Entrepreneur.

Built with **HTML5**, **Tailwind CSS (Play CDN)**, **vanilla JavaScript**, and **Lucide icons**. Custom motion, theme tokens, and layout live in `assets/css/style.css` and `assets/js/script.js`.

The Tailwind CDN is used so the site can run from any static host or local folder without a build step. For production, you can later compile Tailwind locally and drop the generated CSS into `assets/css/`.

## Run locally

Open `index.html` in a browser, or serve the folder (recommended, so CV detection and paths work reliably):

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Contact Form Setup (Formspree)

The contact form is integrated with **Formspree** for secure email delivery. To enable it:

### Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account (50 submissions/month)
3. Verify your email address

### Step 2: Create a New Form

1. Click "New Form" in your Formspree dashboard
2. Enter a form name (e.g., "Portfolio Contact Form")
3. Click "Create Form"

### Step 3: Configure Recipient Emails

1. In your form settings, go to "Emails"
2. Add your recipient email addresses:
   - `maintellitechnologies@gmail.com`
   - `ekemartinudochukwu4@gmail.com`
3. Configure the email subject line (default: "New Portfolio Inquiry - Portfolio Website")
4. Ensure "Reply-to" is set to use the sender's email address (automatic with Formspree)

### Step 4: Get Your Formspree ID

1. After creating the form, you'll see a form endpoint URL like:
   `https://formspree.io/f/your-form-id`
2. Copy the form ID (the part after `/f/`)

### Step 5: Update the HTML

1. Open `index.html`
2. Find the contact form (around line 519)
3. Replace `YOUR_FORMSPREE_ID` with your actual Formspree ID:

```html
<form id="contact-form" action="https://formspree.io/f/YOUR_ACTUAL_FORMSPREE_ID" method="POST">
```

Example:
```html
<form id="contact-form" action="https://formspree.io/f/abc123xyz" method="POST">
```

### Step 6: Test the Form

1. Deploy your website or test locally
2. Fill out the contact form with test data
3. Click "Send Message"
4. Check your email inbox (and spam folder) for the test message

### Email Format You'll Receive:

**Subject:** New Portfolio Inquiry - [Visitor's Subject]

**Body:**
```
Name: [Visitor's Name]
Email: [Visitor's Email]
Subject: [Visitor's Subject]
Message: [Visitor's Message]

Submitted: [Date and Time]
```

## Customize

Edit the `CONFIG` object at the top of `assets/js/script.js`:

- `cvPath` — local CV file. Place the PDF at `assets/Eke-MartinFavour-CV.pdf`. The Download CV button stays disabled until that file exists.
- `contactEmail` — primary contact email (default: ekemartinudochukwu4@gmail.com)
- `social` — GitHub, LinkedIn, Instagram, TikTok, and X URLs. Icons stay hidden until URLs are set.
- `skills` — self-assessed placeholder percentages. Update values as you wish; they are not presented as verified ratings.

Replace placeholders:

- `assets/images/profile-placeholder.svg` → `profile.jpg` (then update `index.html`)
- `assets/images/about-placeholder.svg` → `about.jpg`
- Project SVGs → real screenshots
- Resume dates, school names, and live/source links in `index.html`

## Deployment to Vercel

1. Push your code to GitHub
2. Import your project in Vercel
3. Deploy automatically (no build step needed)
4. Vercel will serve the static files

## Notes

- Project cards are marked as **concepts** until live URLs exist.
- Dark mode is the default. The sun/moon control stores the preference in `localStorage`.
- `prefers-reduced-motion` disables nonessential animation.
- Formspree handles spam protection and email delivery securely.
- No API keys are exposed in the frontend code.