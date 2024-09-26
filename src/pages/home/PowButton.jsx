import React from 'react';

const PowButton = () => {
  return (
    <div>
      <p>powpow 컴포넌트 테스트 버튼</p>
      <BasicButton variant={"sub"}>구매하기</BasicButton>
      <BasicButton variant={"primary"} shape={"big"} size={"large"} border={"gray100"} color={"white"} font={"h1"}>구매하기</BasicButton>
    </div>
  );
};

export default PowButton;