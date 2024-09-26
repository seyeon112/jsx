import React, { useContext, useState } from 'react';
import { AnimalsContext } from './AnimalsContext';
import useInput from '../../../../../hooks/useinput';

//실습 
//context 에 저장된 동물 세마리를 버튼으로 출력(Animal 컴포넌트를 이용)
// input 태그에 동물 입력 후 엔터 : 동물 버튼을 추가 (Context에 있는 insert 메소드)
// 동물 버튼을 클릭하면 해당 버튼이 삭제 (COntext에 있느 remove 메서드)
//모두 다 context에 선언된 메서드만 사용
//style은 자유롭게 해도 무관
//useContext() 사용!

const Animals = () => {
  const {state, action} = useContext(AnimalsContext);
  const [value, onChangeValue, setValue] = useInput("");
  const onChangeInputValue = (e) => {
    setValue(e.target.value)
  }

  // (context) => {
  //   console.log(context)
  // }

  const onKeyUpToInserAnimal = (e) => {
    if(e.key === 'Enter') {
      action.insert(value)
      
    }
  }
 
  console.log(value)

  return (
    
    <div>
      <input type="text" onChange={onChangeInputValue} onKeyUp={onKeyUpToInserAnimal}/>
      <Animal />
      {/* <button onClick={() => {context.action.remove}}>동물!</button> */}
    </div>
  );
};

export default Animals;