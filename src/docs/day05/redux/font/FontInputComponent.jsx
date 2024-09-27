import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from '../../../../modules/count';

const FontInputComponent = () => {


  const number = useSelector(((state) => state.number));

  const dispatch = useDispatch();

  return (
    <div>
      <h1>재밌는 리덕스2</h1>
       <input type="text" />
       <button onClick={() => {dispatch(increase(value))}}>입력한 값으로 커져라</button>
       </div>
  );
};

export default FontInputComponent;