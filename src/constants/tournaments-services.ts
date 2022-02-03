import axios from 'axios';
import { ITournament } from '../Types/tournaments';
import { API_TOURNAMENTS_URL } from './api';

interface IResponseData {
  data: ITournament[];
}

export const fetchTournaments = (): Promise<IResponseData> => {
  return axios.get(API_TOURNAMENTS_URL);
};

export const deleteTournament = (id: string): Promise<{}> => {
  return axios.delete(API_TOURNAMENTS_URL + '/' + id);
};

export const findTournaments = (value: string): Promise<IResponseData> => {
  return axios.get(API_TOURNAMENTS_URL + '?q=' + value);
};

export const editTournament = (name: string): Promise<IResponseData> => {
  return axios.patch(API_TOURNAMENTS_URL, {
    name: name
  });
};

export const createTournament = (name: string): Promise<IResponseData> => {
  return axios.post(API_TOURNAMENTS_URL, {
    name: name
  });
};
