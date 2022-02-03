import {
  FETCH_TOURNAMENTS,
  FETCH_TOURNAMENTS_SUCCESS,
  FETCH_TOURNAMENTS_FAILURE,
  DELETE_TOURNAMENTS_SUCCESS
} from '../actions/tournaments-types';
import { ITournament } from '../Types/tournaments';

const initialState = {
  status: 'init',
  tournaments: [],
  error: ''
};

export default function tournaments(state: any = initialState, action: any) {
  switch (action.type) {
    case FETCH_TOURNAMENTS_SUCCESS:
      return {
        ...state,
        tournaments: action.payload,
        status: 'loaded'
      };
    case FETCH_TOURNAMENTS_FAILURE:
      return {
        ...state,
        tournaments: [],
        error: action.payload,
        status: 'error'
      };
    case FETCH_TOURNAMENTS:
      return {
        ...state,
        tournaments: [],
        status: 'loading'
      };
    case DELETE_TOURNAMENTS_SUCCESS:
      return {
        ...state,
        tournaments: state.tournaments.filter(
          (tournament: ITournament) => tournament.id !== action.payload
        )
      };
    default:
      return state;
  }
}
