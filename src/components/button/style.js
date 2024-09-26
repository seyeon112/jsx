import styled, {css} from "styled-components";

const variantCSS = {
  primary : css`
    background-color: ${({theme}) => theme.PALLATE.primary["main"]};
  `,
    
  sub : css`
    background-color: ${({theme}) => theme.PALLATE.primary["sub"]};
  `,
  
  white : css`
    background-color: ${({theme}) => theme.PALLATE.primary["white"]};
  `
}

const colorCSS = {
  primary : css`
    color: ${({theme}) => theme.PALLATE.primary["main"]};
  `,
    
  sub : css`
    color: ${({theme}) => theme.PALLATE.primary["sub"]};
  `,
  
  white : css`
    color: ${({theme}) => theme.PALLATE.primary["white"]};
  `,

  black : css`
    color: ${({theme}) => theme.PALLATE.primary["black"]};
`,

gray100 : css`
    color: solid 1px ${({theme}) => theme.PALLATE.gray["100"]};
  `,
  gray200 : css`
    color: solid 1px ${({theme}) => theme.PALLATE.gray["200"]};
  `,
  gray300 : css`
    color: solid 1px ${({theme}) => theme.PALLATE.gray["300"]};
  `


}

const borderCSS = {
  primary : css`
    border: solid 1px ${({theme}) => theme.PALLATE.primary["main"]};
  `,
    
  sub : css`
    border: solid 1px ${({theme}) => theme.PALLATE.primary["sub"]};
  `,

  gray100 : css`
    border: solid 1px ${({theme}) => theme.PALLATE.gray["100"]};
  `,
  gray200 : css`
    border: solid 1px ${({theme}) => theme.PALLATE.gray["200"]};
  `,
  gray300 : css`
    border: solid 1px ${({theme}) => theme.PALLATE.gray["300"]};
  `
};

const sizeCSS = {
  small : css`
  width: 64px;
  height: 32px;
  padding: 16px 0;
  `,
  medium : css`
  width: 96px;
  height: 48px;
  padding: 16px 0;
  `,
  large : css`
  width: 128px;
  height: 64px;
  padding: 16px 0;
  `,
  full : css`
  width: 100%;
  height: 8 / 1;
  padding: 16px 0;
  `,
}

const fontCSS = {
  h1 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
    line-height: ${({theme}) => theme.FONT_SIZE["h1"]};
    
  `,
  h2 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h2"]};
    line-height: ${({theme}) => theme.FONT_SIZE["h2"]};
    
  `,
  h3 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h3"]};
    line-height: ${({theme}) => theme.FONT_SIZE["h3"]};
    
  `,
  h4 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h4"]};
    line-height: ${({theme}) => theme.FONT_SIZE["h4"]};
    
  `,
  h5 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h5"]};
    line-height: ${({theme}) => theme.FONT_SIZE["h5"]};
    
  `,
  h6 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h6"]};
    line-height: ${({theme}) => theme.FONT_SIZE["h6"]};
    
  `,
  h7 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h7"]};
    line-height: ${({theme}) => theme.FONT_SIZE["h7"]};
    
  `,
  h8 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h8"]};
    line-height: ${({theme}) => theme.FONT_SIZE["h8"]};
    
  `,
  h9 : css`
    font-size: ${({theme}) => theme.FONT_SIZE["h9"]};
    line-height: ${({theme}) => theme.FONT_SIZE["h9"]};
    
  `
}

const Button = styled.button`
  ${({variant}) => variantCSS[variant]};
  ${({size}) => sizeCSS[size]};
  ${({border}) => borderCSS[border]};
  ${({color}) => colorCSS[color]};
  ${({font}) => fontCSS[font]};
  cursor: pointer;
`;

export default Button;