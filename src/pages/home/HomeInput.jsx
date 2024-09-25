import React from 'react';

const HomeInput = () => {

  //styledInput 만들어서 컴포넌트로 변경하기
  //width 200px, height 200px, border none,
  //styledButton 만들어서 컴포넌트로 변경하기
  //props로 backgroundcolor 받아서 적용시키기

  return (
    <div>
      <input type="text" placeholder='이름을 입력하세요' />
      <input type="text" placeholder='비밀번호를 입력하세요' />
      <button>검증 버튼</button>
    </div>
  );
};

export default HomeInput;