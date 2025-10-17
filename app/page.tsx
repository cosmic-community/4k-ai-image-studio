import { getFeaturedImages } from '@/lib/cosmic'
import { GeneratedImage } from '@/types'
import ImageCard from '@/components/ImageCard'
import Link from 'next/link'

export const revalidate = 60

export default async function Home() {
  const featuredImages = await getFeaturedImages() as GeneratedImage[]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          4K AI Image Studio
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          Discover stunning AI-generated images in 4K resolution with advanced editing capabilities
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/gallery"
            className="px-8 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium transition-colors"
          >
            View Gallery
          </Link>
          <Link 
            href="/models"
            className="px-8 py-3 bg-dark-lighter hover:bg-dark-light rounded-lg font-medium transition-colors border border-slate-700"
          >
            Explore Models
          </Link>
        </div>
      </section>

      {/* Featured Images Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Creations</h2>
          <Link 
            href="/gallery"
            className="text-primary hover:text-primary-dark transition-colors"
          >
            View All →
          </Link>
        </div>
        
        {featuredImages.length === 0 ? (
          <div className="text-center py-12 bg-dark-lighter rounded-lg">
            <p className="text-slate-400">No featured images available yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredImages.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </section>

      {/* Features Overview */}
      <section className="mt-20 bg-dark-lighter rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Powerful Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">Advanced AI Models</h3>
            <p className="text-slate-400">
              Multiple AI models optimized for different styles and use cases
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Editing Features</h3>
            <p className="text-slate-400">
              Professional editing tools including upscaling, color correction, and style transfer
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📐</div>
            <h3 className="text-xl font-semibold mb-2">4K Resolution</h3>
            <p className="text-slate-400">
              Generate and edit images in stunning 4K quality
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/features"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium transition-colors"
          >
            Explore All Features
          </Link>
        </div>
      </section>
    </div>
  )
}