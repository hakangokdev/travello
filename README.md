# 🌍 Travello - Travel Agency Landing Page

A modern, responsive travel agency landing page built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases a complete travel booking website with beautiful UI components and smooth user interactions.

<img width="1916" height="1224" alt="Image" src="https://github.com/user-attachments/assets/d9607ccc-cffb-48f5-8777-df8b199333e8" />

## ✨ Features

- **🎨 Modern Design**: Clean and professional UI based on Figma designs
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Next.js 15**: Latest Next.js features with App Router
- **🔷 TypeScript**: Full type safety throughout the application
- **🎯 Component-Based**: Modular and reusable React components
- **🎨 CSS Modules**: Scoped styling with CSS Modules
- **🖼️ Image Optimization**: Next.js Image component for optimal performance
- **🎭 Interactive Elements**: Smooth animations and hover effects
- **📊 Design System**: Consistent colors, typography, and spacing

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + CSS Modules
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Poppins, Abril Fatface, Rubik, Lato)
- **Icons**: Custom SVG icons
- **Development**: ESLint, PostCSS

## 📋 Sections

1. **Hero Section**: Eye-catching banner with navigation and booking form
2. **Upcoming Offers**: Grid of featured travel destinations
3. **Book Section**: Travel guide download section
4. **Destinations**: Interactive carousel of popular destinations
5. **Blog Section**: Travel articles and guides
6. **Testimonials**: Customer reviews with interactive pagination
7. **Footer**: Contact information, social links, and newsletter signup

## 🎨 Design System

### Colors
- **Primary**: #177BA5 (Ocean Blue)
- **Accent Green**: #4CAF50
- **Accent Pink**: #E91E63
- **Text**: #292D32 (Dark Gray)
- **Background**: #FFFFFF (White)

### Typography
- **Display**: Abril Fatface
- **Headings**: Poppins (600-700)
- **Body**: Poppins (300-500)
- **Special**: Rubik, Lato

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hakangokdev/travello.git
   cd travello
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
travello/
├── public/
│   ├── images/          # All project images
│   └── icon/           # SVG icons
├── src/
│   ├── app/            # Next.js App Router
│   ├── components/     # React components
│   │   ├── HeroSlider/
│   │   ├── UpcomingOffers/
│   │   ├── BookSection/
│   │   ├── Destinations/
│   │   ├── BlogSection/
│   │   ├── Testimonials/
│   │   └── Footer/
│   └── constants/      # Design system constants
│       ├── colors.ts
│       ├── typography.ts
│       └── theme.ts
├── package.json
└── README.md
```

## 🎯 Component Architecture

Each component follows a consistent structure:
- `ComponentName.tsx` - Main component file
- `ComponentName.module.css` - Scoped styles
- `index.ts` - Export file

### Example Component Structure
```typescript
// Component with TypeScript interfaces
interface ComponentProps {
  className?: string;
}

export const Component: React.FC<ComponentProps> = ({ className }) => {
  return (
    <section className={`${styles.component} ${className || ''}`}>
      {/* Component content */}
    </section>
  );
};
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🎨 Customization

### Colors
Update colors in [`src/constants/colors.ts`](src/constants/colors.ts):
```typescript
export const COLORS = {
  primary: '#177BA5',
  // Add your custom colors
};
```

### Typography
Modify fonts in [`src/constants/typography.ts`](src/constants/typography.ts):
```typescript
export const TYPOGRAPHY = {
  fontFamilies: {
    primary: 'Poppins',
    // Add your custom fonts
  },
};
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repository
- **Railway**: Deploy with `railway up`
- **Docker**: Use the included Dockerfile

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Hakan Gök**
- GitHub: [@hakangokdev](https://github.com/hakangokdev)
- LinkedIn: [gokhakan](https://linkedin.com/in/gokhakan)

## 🙏 Acknowledgments

- Design inspiration from Figma Community
- Images from Unsplash and Pexels
- Icons from custom SVG designs
- Fonts from Google Fonts

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Connect with me on LinkedIn
- Send me an email

---

⭐ **If you found this project helpful, please give it a star!** ⭐
