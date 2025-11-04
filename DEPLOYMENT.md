# GitHub Pages Deployment Guide

This guide will help you deploy your StrawTech website to GitHub Pages.

## 🚀 Quick Deploy Steps

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

This method automatically deploys your site whenever you push to the main branch.

#### Step 1: Push Your Code to GitHub

1. **Create a new repository on GitHub**

   - Go to https://github.com/new
   - Name it something like `strawtech-website` or `straw-use`
   - Keep it public (required for free GitHub Pages)
   - Don't initialize with README (you already have one)

2. **Connect your local repo to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

#### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. That's it! The workflow will automatically run

#### Step 3: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

### Option 2: Manual Deployment with gh-pages

If you prefer manual control over deployments:

1. **Build and deploy manually**

   ```bash
   pnpm run deploy
   ```

2. **Enable GitHub Pages**

   - Go to repository Settings → Pages
   - Under Source, select branch: `gh-pages`
   - Click Save

3. **Your site will be live at:**
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## 🔧 Configuration Files Created

### 1. `vite.config.ts`

Updated with `base: './'` for relative paths - this ensures all assets load correctly on GitHub Pages.

### 2. `package.json`

Added deployment scripts:

```json
"predeploy": "pnpm run build",
"deploy": "gh-pages -d dist"
```

### 3. `.github/workflows/deploy.yml`

GitHub Actions workflow that automatically:

- Installs dependencies
- Builds your project
- Deploys to GitHub Pages

---

## 📝 Important Notes

### Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `public/CNAME` file with your domain:

   ```
   www.yourdomain.com
   ```

2. Configure DNS with your domain provider:

   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or use A records pointing to GitHub's IPs

3. In GitHub Settings → Pages, enter your custom domain

### Base URL Configuration

**If your site is at root** (e.g., with custom domain):

```typescript
// vite.config.ts
base: "/";
```

**If using GitHub Pages subdirectory** (current setup):

```typescript
// vite.config.ts
base: "./"; // Already configured!
```

### React Router and GitHub Pages

GitHub Pages doesn't support client-side routing by default. If you get 404 errors on page refresh:

**Solution 1: Hash Router (Simplest)**
Update `src/App.tsx`:

```tsx
import { HashRouter as Router } from "react-router-dom";
// Instead of: import { BrowserRouter as Router }
```

**Solution 2: 404 Fallback**
Create `public/404.html` that redirects to `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'" />
  </head>
</html>
```

---

## 🛠️ Troubleshooting

### Assets Not Loading

**Issue**: Images, CSS, or JS files show 404 errors

**Solution**:

- Verify `base: './'` in `vite.config.ts`
- Make sure images are in the `public` folder
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Build Fails

**Issue**: GitHub Actions workflow fails

**Solution**:

```bash
# Test build locally first
pnpm run build

# Check for TypeScript errors
pnpm run lint
```

### Page Shows Old Version

**Issue**: Changes don't appear after deployment

**Solution**:

- Wait a few minutes (GitHub Pages caching)
- Clear browser cache
- Check GitHub Actions completed successfully

### 404 on Page Refresh

**Issue**: Direct navigation to `/about` or `/products` returns 404

**Solution**: Use Hash Router (see React Router section above)

---

## 📊 Deployment Commands Reference

```bash
# Install dependencies
pnpm install

# Run development server locally
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Deploy manually (if not using GitHub Actions)
pnpm run deploy

# Check for errors before deploying
pnpm run lint
```

---

## 🔄 Updating Your Site

### With GitHub Actions (Automatic)

1. Make your changes locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```
3. GitHub Actions will automatically build and deploy

### Manual Deployment

1. Make your changes locally
2. Run deployment:
   ```bash
   pnpm run deploy
   ```

---

## ✅ Pre-Deployment Checklist

Before deploying to production:

- [ ] Replace all placeholder images with real images
- [ ] Update contact information (email, phone, address)
- [ ] Test all pages locally with `pnpm run preview`
- [ ] Check responsive design on mobile devices
- [ ] Update social media links in Footer
- [ ] Test contact form (configure backend if needed)
- [ ] Add real team member information
- [ ] Update product details and pricing
- [ ] Verify all links work correctly
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Check console for errors (F12 → Console)
- [ ] Optimize images (compress to reduce file size)
- [ ] Update meta tags for SEO (add to `index.html`)

---

## 🌐 After Deployment

Once your site is live:

1. **Test thoroughly**

   - Visit all pages
   - Click all links
   - Test on mobile device
   - Try the contact form

2. **Share your site**

   - Add the URL to your GitHub repo description
   - Share on social media
   - Add to your business cards

3. **Monitor**
   - Check GitHub Actions for successful deployments
   - Monitor site performance
   - Track any issues users report

---

## 📧 Need Help?

If you encounter issues:

1. Check the GitHub Actions logs in the Actions tab
2. Review error messages carefully
3. Search GitHub Issues for similar problems
4. Ensure all dependencies are installed correctly

---

## 🎉 Your Site Will Be Live At:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

---

**Ready to deploy? Follow Option 1 above and your site will be live in minutes!** 🚀
