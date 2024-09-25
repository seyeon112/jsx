import React from 'react';

const HomeForm = () => {
  return (
    <div>
      <S.form action="">
        <S.Wrapper>
         <span>아이디</span><input type="text" placeholder='아이디를 입력하세요'/>
        </S.Wrapper>
        <S.Wrapper>
          <span>비밀번호</span><input type="text" placeholder='아이디를 입력하세요'/>
        </S.Wrapper>
        <S.Button className='button' type='button'>전송</S.Button>
      </S.form>
    </div>
  );
};

export default HomeForm;