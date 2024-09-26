// 모든 컴포넌트에게 적용되어야 할 스타일이 정의된 파일
import { createGlobalStyle } from "styled-components";
// import reset = from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


  *{
    font-family: 'SpoqaHanSansNeo-Regular' !important;
    box-sizing: border-box;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
    letter-spacing: -0.4px;
    line-height: 1.3;
    text-decoration: none;
    color: #131313;

  }

  const shapeCSS = {
    :default : css``,
    small : css`
      border-radius: 10px;
      `,

      :large : css`
      border-radius: 20px;
      `,

    big : css`
      border-radius: 30px;
      `,

     
    round : css`
      border-radius: 50%;
      `,
  }

  const Button = styled.button`
    ${({variant}) => variantCSS[variant]};
    ${({shape}) => variantCSS[shape]};

  body {
    line-height: 1.3;
  }
  button {
    cursor: pointer;
    border: none;
  }

  `;

  export default GlobalStyle;
