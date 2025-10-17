import { EditingFeature } from '@/types'

interface FeatureCardProps {
  feature: EditingFeature
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const icon = feature.metadata.feature_icon || '✨'
  const isCompatible4K = feature.metadata.compatible_4k
  const isAvailable = feature.metadata.available

  return (
    <div className="bg-dark-lighter rounded-xl p-6 hover:ring-2 hover:ring-primary transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{icon}</div>
        <div className="flex gap-2">
          {isCompatible4K && (
            <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-medium">
              4K
            </span>
          )}
          {isAvailable && (
            <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium">
              Available
            </span>
          )}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2">{feature.metadata.feature_name}</h3>
      
      <p className="text-slate-400 text-sm">
        {feature.metadata.description}
      </p>
    </div>
  )
}