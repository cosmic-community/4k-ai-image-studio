# 4K AI Image Studio

![App Preview](https://imgix.cosmicjs.com/3a6c3590-ab32-11f0-936e-dbe343b25d95-photo-1511497584788-876760111969-1760689264782.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern showcase platform for AI-generated 4K images with advanced editing capabilities. Built with Next.js 15, TypeScript, and Tailwind CSS, powered by Cosmic CMS.

## ✨ Features

- 🖼️ **Stunning Image Gallery** - Browse AI-generated 4K images with detailed prompts and generation parameters
- 🤖 **AI Model Information** - Explore different AI models with capabilities and specifications
- ✨ **Editing Features Grid** - Discover available image editing features organized by category
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Performance Optimized** - Fast loading with imgix image optimization
- 🎨 **Modern UI/UX** - Clean, minimalist design with smooth animations
- 🔍 **Category Filtering** - Filter editing features by type (Enhancement, Transformation, Correction, Effects)

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68f1fb2254d7facf7220e28e&clone_repository=68f1fd4254d7facf7220e2b6)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create ai model which can create a image in 4k with editing feature"

### Code Generation Prompt

> Based on the content model I created for "Create ai model which can create a image in 4k with editing feature", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Imgix** - Image optimization and delivery
- **Bun** - Fast JavaScript runtime and package manager

## 📋 Prerequisites

- Bun installed on your system
- A Cosmic account with your bucket set up
- Node.js 18+ (for compatibility)

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd 4k-ai-image-studio
```

2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file in the root directory:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Generated Images
```typescript
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects
  .find({ type: 'generated-images' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const images = response.objects
```

### Querying AI Models
```typescript
const response = await cosmic.objects
  .find({ 
    type: 'ai-models',
    'metadata.active': true 
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)

const models = response.objects
```

### Filtering Editing Features by Category
```typescript
const response = await cosmic.objects
  .find({ 
    type: 'editing-features',
    'metadata.category.key': 'enhancement'
  })
  .props(['id', 'title', 'metadata'])

const features = response.objects
```

## 🌐 Cosmic CMS Integration

This application integrates with three main content types in your Cosmic bucket:

### Generated Images
- Showcase AI-generated 4K images
- Display prompts and generation parameters
- Link to associated AI models and editing features
- Feature flag for highlighting top images

### AI Models
- Display available AI models with specifications
- Show capabilities (Text-to-Image, Inpainting, etc.)
- Include performance metrics and supported resolutions
- Active/inactive status management

### Editing Features
- Organize features by category (Enhancement, Transformation, Correction, Effects)
- Show feature descriptions and icons
- Indicate 4K compatibility
- Track feature availability

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Environment Variables

Make sure to set these environment variables in your deployment platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key

## 📝 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Homepage with featured images
│   ├── gallery/            # Full image gallery
│   ├── models/             # AI models showcase
│   └── features/           # Editing features grid
├── components/
│   ├── ImageCard.tsx       # Image display component
│   ├── ModelCard.tsx       # AI model card
│   ├── FeatureCard.tsx     # Feature card component
│   ├── Navigation.tsx      # Main navigation
│   └── CosmicBadge.tsx     # Cosmic branding
├── lib/
│   └── cosmic.ts           # Cosmic SDK configuration
└── types.ts                # TypeScript type definitions
```

## 🎨 Customization

### Styling
The application uses Tailwind CSS. Customize colors and styles in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // Add your custom colors
    }
  }
}
```

### Content Types
The application is built around three content types. To add more features:

1. Add new content types in Cosmic dashboard
2. Update TypeScript types in `types.ts`
3. Create new pages/components as needed
4. Fetch data using the Cosmic SDK

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

<!-- README_END -->