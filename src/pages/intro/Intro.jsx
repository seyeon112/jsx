import React from 'react';

const intro = () => {
  return (
    <div>
      <div>
        여기는 소개 페이지입니다
      </div>
      <div>
        {/* 쿼리스트링으로 하나 보냄 title이 key값*/}
        <Link to={"/job?title=developer"}>개발자 소개 페이지</Link>
      </div>
      <div>
        <Link tp="/job?title=planner">기획자 소개 페이지</Link>
      </div>
    </div>
  );
};

export default intro;