import React from 'react';

const Component01 = (props) => {

  console.log(props.name)
  console.log(props.age)
  console.log(props)
  
  return (
    <div>
      {/* props의 이름과 나이를 화면에 출력 */}
      {props.name}님의 나이는 {props.age}
    </div>
  );
};

export default Component01;