import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

img {
  display: block;
}


`;

export default GlobalStyles;
