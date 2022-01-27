import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, Arial, sans-serif;
}

body {
  background-color: ${(props) => props.theme.colors.background};
  height: 200vh;
}

a {
  color: inherit;
}

button {
  cursor: pointer;
}
`;
