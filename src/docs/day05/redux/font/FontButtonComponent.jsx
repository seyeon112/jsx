import React from 'react';
import { useSelector } from 'react-redux';

const FontButtonComponent = () => {

  console.log(useSelector(({number}) => number));
  const number = useSelector(((state) => state.number));

  const dispatch = useDispatch();

  const [value, onChangeValue] = useInput();

  return (
    <div>
      <h1>재미있는 리덕스!</h1>
      <button onClick={() => {dispatch(increase(value))}}>커지는 버튼</button>
    </div>
  );
};

export default FontButtonComponent;