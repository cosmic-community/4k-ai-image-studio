import { AIModel } from '@/types'

interface ModelCardProps {
  model: AIModel
}

export default function ModelCard({ model }: ModelCardProps) {
  const capabilities = model.metadata.capabilities || []
  const isActive = model.metadata.active

  return (
    <div className={`bg-dark-lighter rounded-xl p-6 border-2 ${isActive ? 'border-primary' : 'border-slate-700'}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold mb-1">{model.metadata.model_name}</h3>
          <span className="text-sm text-slate-400">v{model.metadata.version}</span>
        </div>
        {isActive && (
          <span className="px-3 py-1 bg-primary rounded-full text-xs font-medium">
            Active
          </span>
        )}
      </div>

      <p className="text-slate-300 mb-6">
        {model.metadata.description}
      </p>

      <div className="space-y-4">
        <div>
          <div className="text-sm text-slate-500 mb-2">Max Resolution</div>
          <div className="font-medium">{model.metadata.max_resolution.value}</div>
        </div>

        {model.metadata.processing_speed && (
          <div>
            <div className="text-sm text-slate-500 mb-2">Processing Speed</div>
            <div className="font-medium">{model.metadata.processing_speed.value}</div>
          </div>
        )}

        {capabilities.length > 0 && (
          <div>
            <div className="text-sm text-slate-500 mb-2">Capabilities</div>
            <div className="flex flex-wrap gap-2">
              {capabilities.map((capability, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-dark rounded-full text-sm text-slate-300"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}