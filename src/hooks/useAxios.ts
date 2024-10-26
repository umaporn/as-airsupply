import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

interface UseAxiosState<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export const useAxios = <T = any>(config: AxiosRequestConfig) => {
  const [state, setState] = useState<UseAxiosState<T>>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios(config);
        setState({ data: response.data, error: null, loading: false });
      } catch (error) {
        const axiosError = error as AxiosError;
        setState({ data: null, error: axiosError.message, loading: false });
      }
    };

    fetchData();
  }, [config]);

  return state;
};
