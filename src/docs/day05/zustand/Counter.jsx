import React from 'react';
import useCounter from './store/useCountStore';

const Counter = () => {


  const {number, decrease, increase} = useCounterStore();
  
  console.log(useCounter())
  return (
    <div>
      <button>-1 감소</button>
      0
      <button>+1 증가</button>
    </div>
  );
};

export default Counter;