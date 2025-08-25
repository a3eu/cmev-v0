# ¡Con música en vivo! Website

This is the official website for ¡Con música en vivo!, a music organization supporting live performances and education in Argentine Tango and Modern Chamber Music throughout the San Francisco Bay Area.

## Features

- **Static Next.js site** optimized for GitHub Pages hosting
- **PayPal integration** for secure donations
- **Responsive design** with modern UI components
- **Event listings** and musician profiles
- **Service offerings** and ways to support

## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
npm run build
```

This creates a static export in the `dist/` folder ready for deployment.

## GitHub Pages Deployment

### Automatic Deployment

The site is configured for automatic deployment to GitHub Pages:

1. **Push to main branch** - triggers automatic build and deployment
2. **GitHub Actions workflow** handles the build process
3. **Static files** are deployed to GitHub Pages

### Manual Setup

To set up GitHub Pages deployment:

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - The workflow will handle the rest

2. **Configure custom domain** (optional):
   - Add `CNAME` file to `public/` directory
   - Configure domain in repository settings

### Deployment Configuration

- **Next.js config**: `next.config.mjs` configured for static export
- **GitHub workflow**: `.github/workflows/deploy.yml`
- **Build output**: `dist/` directory
- **Jekyll disabled**: `.nojekyll` file included

## Project Structure

```
├── app/
│   ├── page.tsx                 # Homepage
│   ├── ways-to-give/           # Donation page with PayPal
│   ├── musicians/              # Musician profiles
│   ├── services/               # Service pages
│   └── blog/                   # Blog section
├── components/
│   ├── ui/                     # UI components
│   ├── page-header.tsx         # Common header
│   └── page-footer.tsx         # Common footer
├── public/                     # Static assets
└── styles/                     # Global styles
```

## Key Technologies

- **Next.js 15** with App Router
- **Tailwind CSS** for styling
- **Radix UI** components
- **PayPal React SDK** for donations
- **Lucide React** for icons
- **TypeScript** for type safety

## PayPal Integration

The donation page includes PayPal integration:
- Secure payment processing
- Configurable donation amounts
- Production-ready setup

## Contributing

1. Create a feature branch
2. Make changes
3. Test locally with `npm run build`
4. Submit a pull request

## License

© 2025 ¡Con música en vivo! All rights reserved.