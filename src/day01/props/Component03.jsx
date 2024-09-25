import React from 'react';

const Component03 = (props) => {

  console.log(props.phone)
  console.log(props.address)
  console.log(props.style)

  return (
    <div>
      <p>휴대폰 번호</p>
      {props.phone}
      <p>주소</p>
      {props.address}
    </div>
  );
};

export default Component03;