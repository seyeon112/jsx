import React from 'react';
import useSelector, { useDispatch } from 'react-redux';

const Counter = () => {

  //store에 값을 가져올 떄 useSelector();
  console.log(useSelector(({number}) => number));
  // console.log(useSelector({number} => number)) 오류
  const number = useSelector(((state) => state.number));

  // 액션을 발생시키는 훅 함수 useDispatch();
  const dispatch = useDispatch();

  const [value, onChangeValue] = useInput();
  console.log(value);

  return (
    <div>
      <h1>{number}</h1>
      <input type="text" value={value} onChange={onChangeValue} />
      <div>
        <button onClick={() => { dispatch( decrease(value))}}>-1 감소</button>
        <button onClick={() => { dispatch( increase(value))}}>+1 증가</button>
      </div>
    </div>
  );
};

export default Counter;