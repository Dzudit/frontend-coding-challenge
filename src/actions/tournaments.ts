import {
  FETCH_TOURNAMENTS,
  FETCH_TOURNAMENTS_SUCCESS,
  FETCH_TOURNAMENTS_FAILURE
} from './tournaments-types';
import { fetchTournaments } from '../constants/tournaments-services';
import { ITournament } from '../Types/tournaments';

export const fetchTournamentsStart = () => {
  return {
    type: FETCH_TOURNAMENTS
  };
};

export const fetchTournamentsSuccess = (tournaments: ITournament[]) => {
  return {
    type: FETCH_TOURNAMENTS_SUCCESS,
    payload: tournaments
  };
};

export const fetchTournamentsFailure = (error: string) => {
  return {
    type: FETCH_TOURNAMENTS_FAILURE,
    payload: error
  };
};

export const getTournaments = () => {
  return (dispatch: any) => {
    dispatch(fetchTournamentsStart());
    fetchTournaments()
      .then(resp => {
        dispatch(fetchTournamentsSuccess(resp.data));
      })
      .catch(error => {
        dispatch(fetchTournamentsFailure(error));
      });
  };
};
