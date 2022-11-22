import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

img {
  display: block;
}

a {
  text-decoration: none;
  color: black;
}


`;

export default GlobalStyles;
