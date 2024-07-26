import api from './api';
import { TopicDTO } from '../dtos/TopicDTO';

export const getTopics = async (): Promise<TopicDTO[]> => {
  const response = await api.get<TopicDTO[]>(`/topics`);
  return response.data;
};
