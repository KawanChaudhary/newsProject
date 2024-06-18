import { useState } from 'react'
import { ApiResponse } from '../Types/types';
import { api } from '../API/axiosInstance';
import { initialState } from '../InitialState/APIResponse';

const useCommon = () => {
  const [news, setNews] = useState<ApiResponse>(initialState);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchNews = async (URL:string) => {
    try {
      const { data } = await api.get<ApiResponse>(URL);
      setNews(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    catch (error: any) {
      console.log(error.message);
    }
  }

  return {
    fetchNews,
    news,
    loading
  }

}

export default useCommon