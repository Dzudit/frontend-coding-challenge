import React, { useEffect, useState } from 'react';
import './tournaments.sass';
import { useDispatch } from 'react-redux';
import {
  getTournaments,
  searchTournaments,
  createNewTournament
} from '../../actions/tournaments';
import { useTournaments } from '../../selectors/tournaments';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { ITournament } from '../../Types/tournaments';
import Card from '../../components/Card';

const state = {
  LOADING: 'loading',
  ERROR: 'error',
  LOADED: 'loaded'
};

const Tournaments: React.FC = () => {
  const dispatch = useDispatch();
  const { tournaments: data } = useTournaments();
  const [typingTimeout, setTypingTimeout] = useState<any>();

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

  const searchRequest = (value: string) => {
    if (value === '') {
      dispatch(getTournaments());
    } else dispatch(searchTournaments(value));
  };

  const searchTournamentsInputTyping = (value: string) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    let timer = setTimeout(function() {
      searchRequest(value);
    }, 1500);
    setTypingTimeout(timer);
  };

  const onCreateTournament = () => {
    let value = prompt('New Tournament Name:');
    if (value) {
      dispatch(createNewTournament(value));
    }
  };

  return (
    <div className="content">
      <div className="tools__container">
        <Input
          placeholder="Search tournament ..."
          onChange={e => {
            searchTournamentsInputTyping(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            onCreateTournament();
          }}
        >
          Create Tournament
        </Button>
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
      {/* <Modal title='Do you really want to delete this tournament?' open = {true}/> */}
    </div>
  );
};

export default Tournaments;
