import { GeneratedImage } from '@/types'

interface ImageCardProps {
  image: GeneratedImage
}

export default function ImageCard({ image }: ImageCardProps) {
  const imageUrl = image.metadata.image?.imgix_url
  const model = image.metadata.ai_model
  const features = image.metadata.editing_features || []

  if (!imageUrl) {
    return null
  }

  return (
    <div className="bg-dark-lighter rounded-xl overflow-hidden hover:ring-2 hover:ring-primary transition-all">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={`${imageUrl}?w=800&h=450&fit=crop&auto=format,compress`}
          alt={image.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          width={400}
          height={225}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {image.metadata.prompt}
        </p>

        <div className="space-y-3">
          {model && (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-slate-500">Model:</span>
              <span className="text-primary">{model.title}</span>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-500">Resolution:</span>
            <span className="text-slate-300">{image.metadata.resolution}</span>
          </div>

          {image.metadata.generation_time && (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-slate-500">Generation Time:</span>
              <span className="text-slate-300">{image.metadata.generation_time}s</span>
            </div>
          )}

          {features.length > 0 && (
            <div className="pt-3 border-t border-slate-700">
              <div className="text-sm text-slate-500 mb-2">Editing Features Applied:</div>
              <div className="flex flex-wrap gap-2">
                {features.map((feature) => (
                  <span
                    key={feature.id}
                    className="text-xs px-2 py-1 bg-dark rounded-full text-slate-300"
                  >
                    {feature.metadata.feature_icon} {feature.title}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}