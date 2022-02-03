import { ITournament } from '../Types/tournaments';
import './styles/card.sass';
import React from 'react';
import H6 from './H6';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { deleteTournaments, editTournamentName } from '../actions/tournaments';

const Card = (props: ITournament) => {
  const dispatch = useDispatch();

  const onDelete = (id: string) => {
    let value = window.confirm('Do you really want to delete this tournament?');
    if (value) dispatch(deleteTournaments(id));
  };

  const onEdit = (id: string) => {
    let value = prompt('New Tournament Name:');
    if (value) {
      dispatch(editTournamentName(id, value));
    }
  };

  return (
    <div className="card">
      <H6>{props.name}</H6>
      <div>Organizer: {props.organizer}</div>
      <div>Game: {props.game} </div>
      <div>
        Participants: {props.participants.current}/{props.participants.max}
      </div>
      <div>
        Start:{' '}
        {new Date(props.startDate).toLocaleDateString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })}{' '}
      </div>
      <div className="card__action">
        <Button
          onClick={() => {
            onEdit(props.id);
          }}
          className="button--edit"
        >
          EDIT
        </Button>
        <Button
          onClick={() => {
            onDelete(props.id);
          }}
        >
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default Card;
