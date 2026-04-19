import { BaseProvider, getOpenAILikeModel } from '~/lib/modules/llm/base-provider';
import type { ModelInfo } from '~/lib/modules/llm/types';
import type { IProviderSetting } from '~/types/model';
import type { LanguageModelV1 } from 'ai';
import { logger } from '~/utils/logger';

interface LlamaCppModelDetails {
  id: string;
  object: string;
  owned_by: string;
}

interface LlamaCppModelsResponse {
  object: string;
  data: LlamaCppModelDetails[];
}

export default class LlamaCppProvider extends BaseProvider {
  name = 'LlamaCpp';
  getApiKeyLink = 'https://github.com/ggml-org/llama.cpp/blob/master/docs/server.md';
  labelForGetApiKey = 'llama.cpp Server Docs';
  icon = 'i-ph:cpu';

  config = {
    baseUrlKey: 'LLAMACPP_API_BASE_URL',
    baseUrl: 'http://127.0.0.1:8080',
  };

  staticModels: ModelInfo[] = [];

  private _resolveBaseUrl(
    apiKeys?: Record<string, string>,
    settings?: IProviderSetting,
    serverEnv?: Record<string, string>,
  ): string {
    let { baseUrl } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: settings,
      serverEnv,
      defaultBaseUrlKey: 'LLAMACPP_API_BASE_URL',
      defaultApiTokenKey: '',
    });

    if (!baseUrl) {
      baseUrl = this.config.baseUrl!;
    }

    baseUrl = this.resolveDockerUrl(baseUrl, serverEnv);

    // Strip trailing slash
    if (baseUrl.endsWith('/')) {
      baseUrl = baseUrl.slice(0, -1);
    }

    return baseUrl;
  }

  async getDynamicModels(
    apiKeys?: Record<string, string>,
    settings?: IProviderSetting,
    serverEnv: Record<string, string> = {},
  ): Promise<ModelInfo[]> {
    const baseUrl = this._resolveBaseUrl(apiKeys, settings, serverEnv);

    try {
      const response = await fetch(`${baseUrl}/v1/models`, {
        signal: this.createTimeoutSignal(),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = (await response.json()) as LlamaCppModelsResponse;

      if (!data.data || !Array.isArray(data.data)) {
        logger.warn('LlamaCpp: /v1/models returned unexpected shape');
        return [];
      }

      return data.data.map((model) => ({
        name: model.id,
        label: model.id,
        provider: this.name,
        maxTokenAllowed: 32768,
      }));
    } catch (error) {
      if (error instanceof DOMException && error.name === 'TimeoutError') {
        logger.warn('LlamaCpp model fetch timed out — is the llama.cpp server running?');
        return [];
      }

      if (error instanceof TypeError && error.message.includes('fetch')) {
        logger.warn(`LlamaCpp not reachable at ${baseUrl} — is the llama.cpp server running?`);
        return [];
      }

      logger.error('Error fetching LlamaCpp models:', error);

      return [];
    }
  }

  getModelInstance: (options: {
    model: string;
    serverEnv?: Env;
    apiKeys?: Record<string, string>;
    providerSettings?: Record<string, IProviderSetting>;
  }) => LanguageModelV1 = (options) => {
    const { apiKeys, providerSettings, serverEnv, model } = options;
    const envRecord = this.convertEnvToRecord(serverEnv);

    const baseUrl = this._resolveBaseUrl(apiKeys, providerSettings?.[this.name], envRecord);

    logger.debug('LlamaCpp Base URL used: ', baseUrl);

    return getOpenAILikeModel(`${baseUrl}/v1`, undefined, model);
  };
}
