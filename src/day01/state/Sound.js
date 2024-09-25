import React, { useState } from 'react';


const Sound = () => {

  const [sound, setString] = useState("");

  const dog = () => {
    setString("멍멍")
  }

  const cat = () => {
    setString("미야오")
  }
  return (
    <div>
      <button onClick={dog}>강아지</button>
      <p>{sound}</p>
      <button onClick={cat}>고양이</button>
    </div>
  );
};

export default Sound;