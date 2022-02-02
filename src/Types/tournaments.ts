type IParticipants = {
  current: number;
  max: number;
};
export interface ITournament {
  id: string;
  game: string;
  name: string;
  organizer: string;
  startDate: Date;
  participants: IParticipants;
}
