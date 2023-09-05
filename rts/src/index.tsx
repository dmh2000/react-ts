import { createRoot } from "react-dom/client";
import { useState, useRef, useEffect } from "react";
import GuestList from "./state/GuestList";
import { Guest } from "./types";

const App = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<Guest[]>([]);
  const [error, setError] = useState<string>("");
  const [id, setId] = useState<number>(1);

  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onButtonClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const addGuest = () => {
    setName("");
    setError("");
    setId(id + 1);
    const guest = { id: id, name: name };
    setGuests([...guests, guest]);
  };

  const removeGuest = () => {
    const len = guests.length;
    const newGuests = guests.filter((guest) => guest.name !== name);
    if (newGuests.length === len) {
      setError("Guest not found");
      return;
    }
    setError("");
    setName("");
    setGuests(newGuests);
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("drag start");
  };

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("drag end");
  };

  return (
    <div>
      <div draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
        drag me
      </div>
      <h3>
        <GuestList guests={guests} />
      </h3>
      <input ref={inputRef} value={name} onChange={onButtonClick} />
      <button onClick={addGuest}>AddGuest</button>
      <button onClick={removeGuest}>Remove Guest</button>
      <div>{error}</div>
    </div>
  );
};

const domNode = document.getElementById("root");
const root = createRoot(domNode as HTMLElement);
root.render(<App />);
