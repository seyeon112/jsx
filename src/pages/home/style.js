import {styled} from 'styled-components';
import { flexCenterColumn } from '../../global/common';

const S = {};


S.StyleDiv = styled.div`
  width: 100px;
  height: 100px;
  border: solid 1px #333;
  font-size: 20px;
`;


S.StyleButton = styled.button`
color: ${(props) => props.color && props.color };
  background-color: orange;
  border: none;
  `;

S.Wrapper = styled.div`
  ${flexCenterColumn}
`
S.Form = styled.form`
  ${flexCenterColumn}
`

//&
//자기 자신을 선택하는 선택자
S.Button = styled.button`
  font-size: ${(theme) => theme.FONT_SIZE["h1"]};
`




export default S;