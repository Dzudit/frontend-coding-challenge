import {
  FETCH_TOURNAMENTS,
  FETCH_TOURNAMENTS_SUCCESS,
  FETCH_TOURNAMENTS_FAILURE,
  DELETE_TOURNAMENTS_SUCCESS,
  EDIT_TOURNAMENTS_SUCCESS,
  CREATE_TOURNAMENTS_SUCCESS
} from '../actions/tournaments-types';
import { ITournament } from '../Types/tournaments';

const initialState = {
  status: 'init',
  tournaments: [],
  error: ''
};

interface IState {
  status: string;
  tournaments: ITournament[];
  error: string;
}
interface IAction {
  type: string;
  payload: any;
}

export default function tournaments(
  state: IState = initialState,
  action: IAction
) {
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
    case EDIT_TOURNAMENTS_SUCCESS:
      return {
        ...state,
        tournaments: state.tournaments.map((tournament: ITournament) => {
          if (tournament.id == action.payload.id) {
            return action.payload;
          } else return tournament;
        })
      };
    case CREATE_TOURNAMENTS_SUCCESS:
      let newTournamentsData = state.tournaments;
      newTournamentsData.unshift(action.payload);
      return { ...state, tournaments: newTournamentsData };

    default:
      return state;
  }
}
