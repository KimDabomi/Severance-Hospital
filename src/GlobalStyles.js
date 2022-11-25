import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
/** 리셋 CSS */
${reset}

/**
네이버 나눔 글꼴 https://hangeul.naver.com/font/nanum

나눔고딕
font-family: 'NanumGothicLight';
font-family: 'NanumGothic';
font-family: 'NanumGothicBold';
font-family: 'NanumGothicExtraBold';

나눔스퀘어
font-family: 'NanumSquareLight';
font-family: 'NanumSquare';
font-family: 'NanumSquareBold';
font-family: 'NanumSquareExtraBold';
font-family: 'NanumSquareAcb';
font-family: 'NanumSquareAceb';
font-family: 'NanumSquareAcl';
font-family: 'NanumSquareAcr';
*/

img {
  display: block;
}

a {
  font-family: 'NanumSquare';
  font-weight: 700;
  text-decoration: none;
  color: black;
}

strong {
font-family: 'NanumSquare';
font-weight: 700;
}

h1, h2, h3, h4, h5, p, span {
font-family: 'NanumGothic';
}
`;

export default GlobalStyles;
