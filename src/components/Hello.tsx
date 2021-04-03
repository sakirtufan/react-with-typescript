import React, { useReducer, useRef, useState } from "react";

interface IHelloProps {
  name: string;
  age?: number;
  job: string;
  hobbies?: string | string[];
}

interface Note {
  content: string;
}

type Actions =
  | { type: "add"; content: string }
  | { type: "remove"; id: number };

const NotesReducer = (state: Note[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [...state, { content: action.content }];
    case "remove":
      return state.filter((_, i) => action.id !== i);
    default:
      return [...state];
  }
};

const Hello: React.FC<IHelloProps> = ({ name, age, job, hobbies }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const [count, setCount] = useState<number | string | undefined>(1453);
  const [alt, setAlt] = useState<{ alt: number | string }>({ alt: 35 });

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [notes, dispatch] = useReducer(NotesReducer, []);

  return (
    <div>
      <h2>
        Hello {name}. is your job {job}
      </h2><br/>
      <input type="text" onChange={handleChange} ref={inputRef} />
      <div>
        <button ref={buttonRef}>Button</button>
      </div><br/>
      <div>
        <button onClick={() => {
          dispatch({
            type: 'add',
            content:'Note 1'
          })
        }}>action</button>
      </div>
    </div>
  );
};

export default Hello;
