import { getEditingFeatures } from '@/lib/cosmic'
import { EditingFeature } from '@/types'
import FeatureCard from '@/components/FeatureCard'

export const revalidate = 60

export default async function FeaturesPage() {
  const features = await getEditingFeatures() as EditingFeature[]

  // Group features by category
  const featuresByCategory = features.reduce((acc, feature) => {
    const category = feature.metadata.category.value
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(feature)
    return acc
  }, {} as Record<string, EditingFeature[]>)

  const categoryOrder = ['Enhancement', 'Transformation', 'Correction', 'Effects']

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Editing Features</h1>
        <p className="text-xl text-slate-300">
          Powerful tools for editing and enhancing your 4K images
        </p>
      </div>

      {features.length === 0 ? (
        <div className="text-center py-20 bg-dark-lighter rounded-lg">
          <p className="text-slate-400 text-lg">No features available yet</p>
        </div>
      ) : (
        <div className="space-y-12">
          {categoryOrder
            .filter(categoryKey => {
              const categoryFeatures = featuresByCategory[categoryKey]
              return categoryFeatures && categoryFeatures.length > 0
            })
            .map((categoryKey) => {
              const categoryFeatures = featuresByCategory[categoryKey]
              
              if (!categoryFeatures || categoryFeatures.length === 0) {
                return null
              }
              
              return (
                <div key={categoryKey}>
                  <h2 className="text-2xl font-bold mb-6">{categoryKey}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryFeatures.map((feature) => (
                      <FeatureCard key={feature.id} feature={feature} />
                    ))}
                  </div>
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}