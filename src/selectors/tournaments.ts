import { RootState } from '../reducers';
import { useSelector } from 'react-redux';

interface IState {
  tournaments: [];
  status: string;
}

export const useTournaments = (): RootState => {
  const tournaments = useSelector((state: IState) => state.tournaments);
  return { tournaments };
};
