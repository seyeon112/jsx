import React, { useState } from 'react';

//빨간색 버튼을 누르면 글자색을 빨갛게
//파란색 버튼을 누르면 글자색을 파랗게
//핑크색을 입력하면 글자색을 없앤다. 


const Color = () => {

  const [result, setResult] = useState("");
  const [color, setColor] = useState("");

  const red = {
    color : "red"
  };

  const blue = {
    color : "blue"
  };

  const onResult = (e) => {
    setColor(e.target.value)
  }

  return (
    <div>
      <p>{result}</p>
      <input type="text" onChange={pink} placeholder='색깔을 입력하세요요'/>
      <button onClick={red}>빨간색</button>
      <button onClick={blue}>파란색</button>
    </div>
  );
};

export default Color;