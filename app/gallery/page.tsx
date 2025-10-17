import { getGeneratedImages } from '@/lib/cosmic'
import { GeneratedImage } from '@/types'
import ImageCard from '@/components/ImageCard'

export const revalidate = 60

export default async function GalleryPage() {
  const images = await getGeneratedImages() as GeneratedImage[]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Image Gallery</h1>
        <p className="text-xl text-slate-300">
          Explore our collection of AI-generated 4K images
        </p>
      </div>

      {images.length === 0 ? (
        <div className="text-center py-20 bg-dark-lighter rounded-lg">
          <p className="text-slate-400 text-lg">No images available yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  )
}