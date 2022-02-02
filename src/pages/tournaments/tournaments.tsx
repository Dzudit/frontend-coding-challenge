import React, { useEffect } from 'react';
import './tournaments.sass';
import { useDispatch } from 'react-redux';
import { getTournaments } from '../../actions/tournaments';
import { useTournaments } from '../../selectors/tournaments';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { ITournament } from '../../Types/tournaments';
import Card from '../../components/Card';

interface IData {
  tournaments: ITournament[];
  status: string;
}

const state = {
  LOADING: 'loading',
  ERROR: 'error',
  LOADED: 'loaded'
};

const Tournaments: React.FC = () => {
  const dispatch = useDispatch();
  const { tournaments: data } = useTournaments();

  useEffect(() => {
    dispatch(getTournaments());
  }, []);

  const statusShow = (status: string) => {
    if (status === state.LOADING) return <>Loading tournaments ...</>;
    else if (status === state.ERROR)
      return (
        <>
          Something went wrong.
          <div>
            {' '}
            <Button
              onClick={() => {
                dispatch(getTournaments());
              }}
            >
              Retry
            </Button>
          </div>
        </>
      );
  };

  const isDataLoaded = () => data?.status === state.LOADED;

  console.log('data', data);

  return (
    <div className="content">
      <div className="tools__container">
        <Input />
        <Button>Create Tournament</Button>
      </div>
      <div className="status">{statusShow(data.status)}</div>
      {isDataLoaded() && (
        <div className="content__tournaments">
          {data?.tournaments.length > 0 ? (
            data?.tournaments.map((element: ITournament) => {
              return (
                <div key={element.id}>
                  <Card {...element} />
                </div>
              );
            })
          ) : (
            <div className="status">No tournaments found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Tournaments;
