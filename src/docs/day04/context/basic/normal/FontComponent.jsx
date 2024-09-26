import React, { useContext } from 'react';
import { FontSizeContext } from './FontContext';


const FontComponent = () => {


  //p 태그의 폰트크기는 fontSize의 초기값을 사용
  //useContext를 사용하여 색상 변경 버튼, 폰트사 사이즈 변경 버튼 완성
  console.log(useContext(FontSizeContext));

  return (
    <div>

      <FontSizeContext>
      {
        (useContext) => {
        console.log(useContext)
        
        return (
          <>
          <p style={{fontSize : useContext.state.fontSize}}>최하위 컴포넌트</p> 
          <button onClick={() => {useContext.action.color("orange")}}>색상변경 버튼</button>
          <button onClick={() => {useContext.action.fontSize("1rem")}}>폰트사이즈 변경 버튼</button>
          </>
         
        )
      }
    }

      </FontSizeContext>

    </div>
  );
};

export default FontComponent;