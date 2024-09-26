import React, { useContext } from 'react';

const Animal = () => {

  const {state, action} = useContext 
  const AnimalsList = state.animals.map((animal, i) => {
    <li key={i}>
      <button onClick={() => {action.remove(i)}}>{animal}</button>
    </li>
  })

  return (
    <div>
      {AnimalsList}
    </div>
  );
};


export default Animal;