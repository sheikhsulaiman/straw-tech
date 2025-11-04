# StrawTech - Eco-Friendly Products from Rice Straw

A modern, responsive website for a startup that creates environment-friendly products from rice straw as alternatives to plastic.

## 🌱 About

StrawTech transforms agricultural waste (rice straw) into sustainable, biodegradable alternatives to plastic products. This website showcases our mission, products, and commitment to environmental sustainability.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Built with Framer Motion for elegant transitions and interactions
- **Modern UI**: Utilizes shadcn/ui components with Tailwind CSS
- **Multi-page Navigation**: Home, About, Products, and Contact pages
- **Contact Form**: Functional contact form for customer inquiries
- **SEO Friendly**: Semantic HTML and proper image alt texts

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Navbar.tsx       # Navigation bar with mobile menu
│   └── Footer.tsx       # Footer with social links
├── pages/
│   ├── Home.tsx         # Landing page with hero section
│   ├── About.tsx        # Company mission, vision, and team
│   ├── Products.tsx     # Product showcase and categories
│   └── Contact.tsx      # Contact form and information
├── assets/              # Images and static assets (add your images here)
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main app with routing
└── main.tsx             # Entry point
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **shadcn/ui** - UI component library
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **pnpm** - Package manager

## 📦 Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd straw-use
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and visit `http://localhost:5173`

## 🖼️ Adding Images

The website uses placeholder images. Add your actual images to the `src/assets/` folder and update the image paths:

### Required Images:

1. **Hero Section** (`/placeholder-hero.jpg`)

   - Alt: "Rice straw products displayed in natural environment"
   - Recommended size: 1200x800px

2. **Impact Section** (`/placeholder-impact.jpg`)

   - Alt: "Environmental impact of rice straw products"
   - Recommended size: 800x600px

3. **Mission Section** (`/placeholder-mission.jpg`)

   - Alt: "Rice straw being processed into eco-friendly materials"
   - Recommended size: 800x600px

4. **Vision Section** (`/placeholder-vision.jpg`)

   - Alt: "Future vision of sustainable manufacturing facilities"
   - Recommended size: 800x600px

5. **Team Photos** (`/placeholder-team-1.jpg` through `/placeholder-team-4.jpg`)

   - Alt: Individual team member portraits
   - Recommended size: 400x400px (square)

6. **Product Images** (`/placeholder-product-1.jpg` through `/placeholder-product-6.jpg`)

   - Alt: Specific product descriptions
   - Recommended size: 600x600px

7. **Map** (`/placeholder-map.jpg`)

   - Alt: "Map showing StrawTech office location"
   - Recommended size: 800x600px

8. **Why Choose** (`/placeholder-why-choose.jpg`)
   - Alt: "Rice straw products showcasing quality and sustainability"
   - Recommended size: 800x600px

### To update image paths:

Replace placeholder paths in the pages with your actual image paths:

```tsx
// Before
<img src="/placeholder-hero.jpg" alt="..." />

// After (if image is in assets folder)
<img src="/src/assets/hero-image.jpg" alt="..." />
```

## 🎨 Customization

### Colors

The primary color scheme uses green to represent eco-friendliness. To change colors, update the Tailwind classes:

- `bg-green-600`, `text-green-600`, `hover:bg-green-700`, etc.

### Content

Update text content in:

- `src/pages/Home.tsx` - Hero text, features, benefits
- `src/pages/About.tsx` - Mission, vision, team info, story
- `src/pages/Products.tsx` - Product details and descriptions
- `src/pages/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Footer links and social media

### Company Name

Replace "StrawTech" throughout the codebase with your actual company name.

## 📄 Available Scripts

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linter
pnpm lint
```

## 🌐 Deployment

### Build the project:

```bash
pnpm build
```

The built files will be in the `dist/` folder, ready to deploy to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📝 TODO

- [ ] Add actual product images to assets folder
- [ ] Update team member photos
- [ ] Configure contact form backend (e.g., EmailJS, Formspree)
- [ ] Add analytics (Google Analytics, Plausible, etc.)
- [ ] Implement product detail pages
- [ ] Add shopping cart functionality (if selling online)
- [ ] Set up SEO meta tags
- [ ] Add blog section (optional)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For questions or support, please contact:

- Email: info@strawtech.com
- Website: [Your Website URL]

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ and ♻️ for a sustainable future**
