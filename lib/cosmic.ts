import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Get all generated images
export async function getGeneratedImages() {
  try {
    const response = await cosmic.objects
      .find({ type: 'generated-images' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch generated images');
  }
}

// Get featured images
export async function getFeaturedImages() {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'generated-images',
        'metadata.featured': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured images');
  }
}

// Get single image by slug
export async function getImageBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ 
        type: 'generated-images',
        slug 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch image');
  }
}

// Get all AI models
export async function getAIModels() {
  try {
    const response = await cosmic.objects
      .find({ type: 'ai-models' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch AI models');
  }
}

// Get active AI models
export async function getActiveAIModels() {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'ai-models',
        'metadata.active': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch AI models');
  }
}

// Get all editing features
export async function getEditingFeatures() {
  try {
    const response = await cosmic.objects
      .find({ type: 'editing-features' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch editing features');
  }
}

// Get editing features by category
export async function getEditingFeaturesByCategory(category: string) {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'editing-features',
        'metadata.category.key': category 
      })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch editing features');
  }
}