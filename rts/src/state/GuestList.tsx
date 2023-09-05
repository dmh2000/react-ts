import { Guest } from "../types";

interface GuestListProps {
  guests: Guest[];
}

const GuestList: React.FC<GuestListProps> = ({ guests }) => {
  return (
    <div>
      {guests.map((guest) => {
        return <div key={guest.id}>{guest.name}</div>;
      })}
    </div>
  );
};

export default GuestList;
