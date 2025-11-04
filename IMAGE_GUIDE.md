# Image Guide for StrawTech Website

## 📸 Image Specifications

This document lists all the images you need to add to complete the website.

## 🎯 Where to Place Images

Place all images in the `public` folder at the root of your project (not inside src/assets). This way they can be accessed directly via `/image-name.jpg`.

## 📋 Required Images List

### 1. Home Page Images

#### Hero Image

- **Filename**: `placeholder-hero.jpg`
- **Location**: `/public/placeholder-hero.jpg`
- **Alt Text**: "Rice straw products displayed in natural environment"
- **Recommended Size**: 1200x800px (landscape)
- **Description**: Main hero image showing rice straw products in use or natural setting
- **Tips**: Use bright, inviting imagery. Show products in real-world context.

#### Impact Section

- **Filename**: `placeholder-impact.jpg`
- **Location**: `/public/placeholder-impact.jpg`
- **Alt Text**: "Environmental impact of rice straw products"
- **Recommended Size**: 800x600px (landscape)
- **Description**: Image showing environmental benefits, farmers, or nature
- **Tips**: Consider showing before/after scenarios or happy farmers.

---

### 2. About Page Images

#### Mission Section

- **Filename**: `placeholder-mission.jpg`
- **Location**: `/public/placeholder-mission.jpg`
- **Alt Text**: "Rice straw being processed into eco-friendly materials"
- **Recommended Size**: 800x600px (landscape)
- **Description**: Manufacturing process or raw rice straw materials
- **Tips**: Show authenticity - your actual process if possible.

#### Vision Section

- **Filename**: `placeholder-vision.jpg`
- **Location**: `/public/placeholder-vision.jpg`
- **Alt Text**: "Future vision of sustainable manufacturing facilities"
- **Recommended Size**: 800x600px (landscape)
- **Description**: Modern facility, growing business, or aspirational imagery
- **Tips**: Show growth potential and future-focused imagery.

#### Team Photos (4 images)

- **Filenames**:
  - `placeholder-team-1.jpg`
  - `placeholder-team-2.jpg`
  - `placeholder-team-3.jpg`
  - `placeholder-team-4.jpg`
- **Location**: `/public/placeholder-team-[1-4].jpg`
- **Alt Text**: "[Name] - [Position] portrait"
- **Recommended Size**: 400x400px (square)
- **Description**: Professional headshots of team members
- **Tips**: Use consistent background/style for all team photos.

---

### 3. Products Page Images

#### Product Images (6 images)

- **Filenames**:
  - `placeholder-product-1.jpg` - Eco Plates Set
  - `placeholder-product-2.jpg` - Straw Shopping Bags
  - `placeholder-product-3.jpg` - Food Containers
  - `placeholder-product-4.jpg` - Cutlery Set
  - `placeholder-product-5.jpg` - Packaging Box
  - `placeholder-product-6.jpg` - Home Storage Bins
- **Location**: `/public/placeholder-product-[1-6].jpg`
- **Recommended Size**: 600x600px (square)
- **Description**: Clear product photography on white/neutral background
- **Tips**:
  - Show products from best angle
  - Consistent lighting and background
  - Include size reference if helpful
  - Show product in use where applicable

#### Why Choose Section

- **Filename**: `placeholder-why-choose.jpg`
- **Location**: `/public/placeholder-why-choose.jpg`
- **Alt Text**: "Rice straw products showcasing quality and sustainability"
- **Recommended Size**: 800x600px (landscape)
- **Description**: Product quality showcase or lifestyle shot
- **Tips**: Show multiple products or satisfied customers.

---

### 4. Contact Page Image

#### Location Map

- **Filename**: `placeholder-map.jpg`
- **Location**: `/public/placeholder-map.jpg`
- **Alt Text**: "Map showing StrawTech office location"
- **Recommended Size**: 800x600px (landscape)
- **Description**: Screenshot of Google Maps or custom map graphic
- **Tips**:
  - Take a screenshot from Google Maps of your location
  - Include landmark references
  - Clear marking of your office location

---

## 🔧 How to Add Images

### Option 1: Replace Placeholder Names (Recommended)

1. Rename your images to match the placeholder names above
2. Place them in the `/public` folder
3. Images will automatically work without code changes

### Option 2: Update Code References

1. Place your images in `/public` folder with any names
2. Search and replace in the code:
   - Find: `/placeholder-[name].jpg`
   - Replace: `/your-actual-filename.jpg`

### Option 3: Use Assets Folder

1. Place images in `/src/assets/`
2. Import them in components:

```tsx
import heroImage from "@/assets/hero-image.jpg";
// Then use: <img src={heroImage} alt="..." />
```

---

## 📐 Image Size Guidelines

### Optimized Web Images

- **Format**: JPG for photos, PNG for graphics with transparency
- **Quality**: 80-85% for JPG compression
- **Max File Size**:
  - Hero images: ~200-300KB
  - Product images: ~100-150KB
  - Team photos: ~80-100KB
  - Thumbnails: ~50KB

### Responsive Considerations

All images will scale responsively, but provide high enough resolution for:

- Desktop: Full quality
- Tablet: 75% of desktop
- Mobile: 50% of desktop

---

## 🎨 Image Style Guidelines

### Consistency

- Use similar color grading/filters across all images
- Maintain consistent lighting style
- Similar background treatments

### Brand Alignment

- Green/earth tones preferred
- Natural lighting when possible
- Show sustainability and eco-friendliness

### Professional Quality

- Clear, sharp focus
- Good lighting
- No distracting elements
- Proper framing and composition

---

## ⚡ Image Optimization Tools

Before adding images, optimize them using:

### Online Tools (Free)

- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- [Compressor.io](https://compressor.io/) - Compress images

### Software

- Adobe Photoshop - Save for Web
- GIMP - Free alternative to Photoshop
- ImageOptim (Mac) - Batch optimization

---

## 🔍 Image Sources (If You Need Stock Photos)

### Free Stock Photo Sites

- [Unsplash](https://unsplash.com/) - Free high-quality images
- [Pexels](https://pexels.com/) - Free stock photos
- [Pixabay](https://pixabay.com/) - Free images and videos

### Search Keywords

- "sustainable products"
- "eco-friendly packaging"
- "rice straw"
- "biodegradable products"
- "environmental conservation"
- "sustainable manufacturing"

---

## ✅ Checklist

Before launching your website, ensure:

- [ ] All 15 placeholder images are replaced
- [ ] Images are optimized for web (<300KB each)
- [ ] Alt texts accurately describe images
- [ ] Images display correctly on desktop
- [ ] Images display correctly on mobile
- [ ] All images load quickly
- [ ] Team names and titles match actual team
- [ ] Contact page map shows correct location
- [ ] Product images match product descriptions

---

## 🆘 Need Help?

If you encounter issues with images:

1. Check browser console for errors (F12)
2. Verify image paths are correct
3. Ensure images are in the `/public` folder
4. Clear browser cache and hard reload (Ctrl+Shift+R)
5. Check image file extensions match code (.jpg vs .jpeg)

---

**Remember**: Good images can make or break your website's first impression. Invest time in getting quality photos that represent your brand well!
