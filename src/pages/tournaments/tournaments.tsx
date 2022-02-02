import React, { useEffect } from 'react';
import './tournaments.sass';
import { useDispatch } from 'react-redux';
import { getTournaments } from '../../actions/tournaments';
import { useTournaments } from '../../selectors/tournaments';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Tournaments: React.FC = () => {
  const dispatch = useDispatch();
  const { tournaments } = useTournaments();

  useEffect(() => {
    dispatch(getTournaments());
  }, []);

  useEffect(() => {
    console.log('tournaments :)', tournaments);
  }, [tournaments]);

  return (
    <div className="content">
      <div className="tools__container">
        <Input /> <Button>Create Tournament</Button>
      </div>
    </div>
  );
};

export default Tournaments;
