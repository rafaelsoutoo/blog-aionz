import api from './api';
import { ArticleDTO } from '../dtos/ArticleDTO';

export const getArticles = async (page: number, limit: number): Promise<ArticleDTO[]> => {
  const response = await api.get<ArticleDTO[]>(`/posts`, {
    params: { page, limit },
  });
  return response.data;
};
