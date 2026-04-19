// Type definitions
export type ProviderName = 'LlamaCpp' | 'LMStudio' | 'OpenAILike';

export interface LlamaCppModel {
  id: string;
  object: string;
  owned_by: string;
  name?: string;
  size?: number;
  modified_at?: string;
  details?: {
    family?: string;
    parameter_size?: string;
    quantization_level?: string;
  };

  // UI state
  status?: 'idle' | 'checking' | 'error';
  error?: string;
}

export interface LMStudioModel {
  id: string;
  object: 'model';
  owned_by: string;
  created?: number;
}

// Constants
export const LLAMACPP_API_URL = 'http://127.0.0.1:8080';

export const PROVIDER_ICONS = {
  LlamaCpp: 'Cpu',
  LMStudio: 'Monitor',
  OpenAILike: 'Globe',
} as const;

export const PROVIDER_DESCRIPTIONS = {
  LlamaCpp: 'Run GGUF models locally using the llama.cpp HTTP server',
  LMStudio: 'Local model inference with LM Studio',
  OpenAILike: 'Connect to OpenAI-compatible API endpoints',
} as const;
