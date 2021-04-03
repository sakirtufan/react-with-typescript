import React from "react";

interface IHelloProps {
  name: string;
  age?: number;
  job: string;
  hobbies?: string | string[];
}

const Hello: React.FC<IHelloProps> = ({ name, age, job, hobbies }) => {
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }; 

  return (
    <div>
      <h2>Hello {name}. is your job {job}</h2>
      <input type="text" onChange={handleChange} />    
    </div>
  );
};

export default Hello;
