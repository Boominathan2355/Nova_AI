import { useCallback, useState } from 'react';
import type { IProviderConfig } from '~/types/model';

export interface UseLocalProvidersReturn {
  localProviders: IProviderConfig[];
  refreshLocalProviders: () => void;
}

export function useLocalProviders(): UseLocalProvidersReturn {
  const [localProviders, setLocalProviders] = useState<IProviderConfig[]>([]);

  const refreshLocalProviders = useCallback(() => {
    /*
     * Refresh logic for local providers
     * This would typically involve checking the status of LlamaCpp and LMStudio
     * For providers with baseUrlKey (LlamaCpp, LMStudio, OpenAILike)
     */
    setLocalProviders([]);
  }, []);

  return {
    localProviders,
    refreshLocalProviders,
  };
}
