# Social Media Sharing Image Guide

## Current Setup
The website currently uses `/assets/images/logo/logo-title.png` as the default Open Graph image for social media sharing.

## Recommended Optimization

For better social media presence, create a dedicated social sharing image with these specifications:

### Image Specifications
- **Dimensions**: 1200 x 630 pixels (optimal for all platforms)
- **Format**: PNG or JPG
- **File size**: Under 1MB
- **Location**: `/public/og-image.png` or `/public/assets/images/og-image.png`

### Design Recommendations
1. **Include your logo** prominently
2. **Add tagline**: "Personalized Cartoon Portraits" or "100% Handmade Cartoon Gifts"
3. **Use brand colors**: #48c5cb (teal) and complementary colors
4. **Ensure readability**: Text should be clear even when thumbnail is small
5. **Safe zone**: Keep important content within central 1200 x 600 area

### Platform-Specific Considerations

#### Facebook/LinkedIn
- 1200 x 630 px is optimal
- Displays as 1.91:1 aspect ratio
- Text and logos should be readable at thumbnail size

#### Twitter
- 1200 x 600 px recommended for summary_large_image
- 2:1 aspect ratio
- Centered content works best

#### WhatsApp/Telegram
- Uses the same OG image
- Displays smaller, so keep design simple

## Creating Your Social Image

### Option 1: Design Tools
- **Canva**: Free templates available
- **Figma**: Professional design tool
- **Photoshop**: Advanced editing

### Option 2: Quick Template
```
┌─────────────────────────────────────────┐
│                                         │
│         [LOGO - Centered]               │
│                                         │
│      Cartoon Gifts                      │
│   Personalized Cartoon Portraits        │
│     100% Handmade | Fast Delivery       │
│                                         │
│      cartoongiftseu.com                 │
│                                         │
└─────────────────────────────────────────┘
```

### Option 3: Using Existing Logo
If you want to use just your logo:
- Increase canvas size to 1200 x 630
- Center your logo
- Add a subtle background color or gradient
- Consider adding tagline below logo

## Implementation

Once you have your image:

1. **Save it** to `/public/og-image.png`

2. **Update SEO component** (already configured to use custom images):
```jsx
<SEO 
  ogImage="/og-image.png"
/>
```

3. **Test your image**:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Current Image Locations

Your current logo files:
- `/public/assets/images/logo/logo.png` - Main logo
- `/public/assets/images/logo/logo-title.png` - Logo with title (currently used for OG)
- `/public/assets/images/logo/logo-title-dark.png` - Dark version

## Testing

After updating your social image:

1. **Clear cache** on social platforms:
   - Facebook: Use the Sharing Debugger and click "Scrape Again"
   - Twitter: Use Card Validator
   - LinkedIn: Use Post Inspector

2. **Test the preview**:
   - Share a link in a test post
   - Check how it appears on mobile and desktop
   - Verify logo and text are clear

## Page-Specific Images

You can also use different images for different pages:

```jsx
// Home page
<SEO ogImage="/og-image-home.png" />

// Order page
<SEO ogImage="/og-image-order.png" />

// Gallery
<SEO ogImage="/og-image-gallery.png" />
```

---

**Need help creating your social image?** Consider hiring a designer on Fiverr or using Canva's free templates.

