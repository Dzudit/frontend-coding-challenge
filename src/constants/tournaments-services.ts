import axios from 'axios';
import { API_TOURNAMENTS_URL } from './api';

export const fetchTournaments = (): Promise<any> => {
  return axios.get(API_TOURNAMENTS_URL);
};
