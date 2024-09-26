import React from 'react';
import { FontSizeConsumer } from './FontContext';

const ContextComponent = () => {
  return (
    <div>
      <FontSizeConsumer>

        {
          (context) => {
            console.log(context)
            const { fontSize } = context.state;
            const { setFontSize } = context.action;
            return (
              <>
              {/* context에 들어가있는 value메서드로 글자크기 0.3rem으로 변경 */}
              {/* context에 들어가있는 value 값으로 p태그의 글자크기 변경 */}
              <p style={{fontSize}}>{`안녕하세요! 컨텍스트입니당.`}</p>
            <button onClick={() => setFontSize("0.3rem")}>글자 크기 변경 버튼</button>
            </>
            )
          }

        }
      </FontSizeConsumer>
      
    </div>
  );
};

export default ContextComponent;