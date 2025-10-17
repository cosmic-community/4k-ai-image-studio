// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  thumbnail?: string;
  status?: string;
  published_at?: string;
}

// AI Model interface
export interface AIModel extends CosmicObject {
  type: 'ai-models';
  metadata: {
    model_name: string;
    description: string;
    version: string;
    max_resolution: {
      key: string;
      value: string;
    };
    capabilities?: string[];
    processing_speed?: {
      key: string;
      value: string;
    };
    active: boolean;
  };
}

// Editing Feature interface
export interface EditingFeature extends CosmicObject {
  type: 'editing-features';
  metadata: {
    feature_name: string;
    description: string;
    feature_icon?: string;
    category: {
      key: string;
      value: string;
    };
    compatible_4k: boolean;
    available: boolean;
  };
}

// Generated Image interface
export interface GeneratedImage extends CosmicObject {
  type: 'generated-images';
  metadata: {
    image: {
      url: string;
      imgix_url: string;
    };
    prompt: string;
    ai_model?: AIModel;
    resolution: string;
    generation_parameters?: {
      steps?: number;
      guidance_scale?: number;
      seed?: number;
      sampler?: string;
      [key: string]: any;
    };
    editing_features?: EditingFeature[];
    generation_time?: number;
    featured?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Category type for editing features
export type FeatureCategory = 'enhancement' | 'transformation' | 'correction' | 'effects';