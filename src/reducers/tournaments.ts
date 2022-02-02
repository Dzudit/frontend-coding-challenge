import {
  FETCH_TOURNAMENTS,
  FETCH_TOURNAMENTS_SUCCESS,
  FETCH_TOURNAMENTS_FAILURE
} from '../actions/tournaments-types';

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
        error: action.payload,
        status: 'error'
      };
    case FETCH_TOURNAMENTS:
      return {
        ...state,
        tournaments: [],
        status: 'loading'
      };

    default:
      return state;
  }
}
