import { ITournament } from '../Types/tournaments';
import './styles/card.sass';
import React from 'react';
import H6 from './H6';
import Button from './Button';

const Card = (props: ITournament) => {
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
        <Button className="button--edit">EDIT</Button>
        <Button>DELETE</Button>
      </div>
    </div>
  );
};

export default Card;
