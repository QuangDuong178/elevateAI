import type { AxiosInstance } from 'axios';
import { API_URL } from '@/constants/api';

export interface RepositorySuggestionProps {
  getMessage: (params: any) => Promise<any>;
}

export const RepositorySuggestion = ($axios: AxiosInstance): RepositorySuggestionProps => ({
  getMessage(): Promise<any> {
    return $axios.get(API_URL.SUGGESTION.GET_MESSAGE);
  },
});
