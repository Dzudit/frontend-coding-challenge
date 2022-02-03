import {
  FETCH_TOURNAMENTS,
  FETCH_TOURNAMENTS_SUCCESS,
  FETCH_TOURNAMENTS_FAILURE,
  DELETE_TOURNAMENTS_SUCCESS
} from './tournaments-types';
import {
  fetchTournaments,
  deleteTournament,
  findTournaments
} from '../constants/tournaments-services';
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

export const deleteTournamentSuccess = (id: string) => {
  return {
    type: DELETE_TOURNAMENTS_SUCCESS,
    payload: id
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

export const deleteTournaments = (id: string) => {
  return (dispatch: any) => {
    deleteTournament(id).then(() => {
      dispatch(deleteTournamentSuccess(id));
    });
  };
};

export const searchTournaments = (value: string) => {
  return (dispatch: any) => {
    dispatch(fetchTournamentsStart());
    findTournaments(value)
      .then(resp => {
        dispatch(fetchTournamentsSuccess(resp.data));
      })
      .catch(error => {
        dispatch(fetchTournamentsFailure(error));
      });
  };
};
