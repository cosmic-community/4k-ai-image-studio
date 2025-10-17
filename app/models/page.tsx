import { getAIModels } from '@/lib/cosmic'
import { AIModel } from '@/types'
import ModelCard from '@/components/ModelCard'

export const revalidate = 60

export default async function ModelsPage() {
  const models = await getAIModels() as AIModel[]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Models</h1>
        <p className="text-xl text-slate-300">
          Explore the AI models powering our 4K image generation
        </p>
      </div>

      {models.length === 0 ? (
        <div className="text-center py-20 bg-dark-lighter rounded-lg">
          <p className="text-slate-400 text-lg">No models available yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      )}
    </div>
  )
}