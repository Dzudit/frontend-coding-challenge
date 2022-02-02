import {
  FETCH_TOURNAMENTS,
  FETCH_TOURNAMENTS_SUCCESS,
  FETCH_TOURNAMENTS_FAILURE
} from './tournaments-types';
import { fetchTournaments } from '../constants/tournaments-services';

type IParticipants = {
  current: number;
  string: number;
};
interface ITournaments {
  id: string;
  game: string;
  name: string;
  organizer: string;
  startDate: Date;
  participants: IParticipants;
}

export const fetchTournamentsStart = () => {
  return {
    type: FETCH_TOURNAMENTS
  };
};

export const fetchTournamentsSuccess = (tournaments: ITournaments[]) => {
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
        dispatch(fetchTournamentsFailure(error.message));
      });
  };
};
