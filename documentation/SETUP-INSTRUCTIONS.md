# Setup Instructions for SEO & Logo Display

## ✅ What's Been Updated

Your SEO has been enhanced to properly display the logo when sharing on social media platforms (Facebook, Twitter, LinkedIn, WhatsApp, etc.).

## 🔧 Required Setup

### 1. Set Environment Variable

Create or update your `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_BASE_URL=https://cartoongiftseu.com
```

**Important**: Use your actual production domain without trailing slash.

### 2. Verify Logo Image

Make sure your logo exists at:
```
/public/assets/images/logo/logo-title.png
```

Current configuration uses this image for social sharing.

### 3. Restart Development Server

After adding the environment variable:
```bash
npm run dev
```

## 📱 Testing Your Logo Display

### Test on Facebook
1. Go to [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your URL: `https://cartoongiftseu.com/bg`
3. Click "Debug"
4. You should see your logo in the preview
5. If it doesn't appear, click "Scrape Again"

### Test on Twitter
1. Go to [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Enter your URL
3. Click "Preview Card"
4. Your logo should appear

### Test on LinkedIn
1. Go to [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. Enter your URL
3. Inspect the preview

## 📸 Optimize Your Social Image (Optional but Recommended)

For best results, create a dedicated 1200 x 630 pixel image:

1. **Include**: 
   - Your logo
   - Tagline: "Personalized Cartoon Portraits"
   - Website URL
   - Brand colors

2. **Save as**: `/public/og-image.png`

3. **Update home page** (already configured to accept custom images):
```jsx
<SEO 
  ogImage="/og-image.png"
/>
```

See `public/SOCIAL-IMAGE-GUIDE.md` for detailed instructions.

## 🌐 Production Deployment

### Vercel/Netlify
Add environment variable in your hosting platform:
- **Key**: `NEXT_PUBLIC_BASE_URL`
- **Value**: `https://cartoongiftseu.com`

### For Both Languages
The system automatically handles both English and Bulgarian URLs:
- English: `https://cartoongiftseu.com/en`
- Bulgarian: `https://cartoongiftseu.com/bg`

Both will show the logo correctly.

## ✅ Verification Checklist

- [ ] Environment variable `NEXT_PUBLIC_BASE_URL` is set
- [ ] Logo file exists at `/public/assets/images/logo/logo-title.png`
- [ ] Development server restarted
- [ ] Tested on Facebook Sharing Debugger
- [ ] Tested on Twitter Card Validator
- [ ] Logo appears in social media previews
- [ ] Environment variable added to production hosting

## 🎨 What Was Improved

1. **Absolute URLs**: Logo now uses full URL for better compatibility
2. **Image Metadata**: Added width, height, and type information
3. **Secure URLs**: Added `og:image:secure_url` for HTTPS
4. **Multiple Formats**: Supports both Open Graph and Twitter Cards
5. **Structured Data**: Enhanced organization schema with logo

## 🚀 Next Steps

1. **Set the environment variable** (most important!)
2. **Test on social platforms** using the debugger tools
3. **Optional**: Create a dedicated 1200x630 social sharing image
4. **Deploy**: Push changes and add env variable to production

## ❓ Troubleshooting

### Logo Not Showing
1. Check environment variable is set correctly
2. Verify logo file path is correct
3. Clear social media cache using debugger tools
4. Wait 24 hours for cache to clear naturally

### Wrong Logo Appearing
1. Clear cache on social platform debuggers
2. Check `og:image` meta tag in page source
3. Verify file is accessible: `https://your domain/assets/images/logo/logo-title.png`

### Need Help?
- Check the console for errors
- Verify the meta tags in page source (View Source)
- Use browser dev tools to inspect the SEO component

---

**Quick Start**: Just set `NEXT_PUBLIC_BASE_URL=https://cartoongiftseu.com` in `.env.local` and restart! 🎉

