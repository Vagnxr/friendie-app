import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
height: 100%;
`;

export const GlobalStyle = createGlobalStyle`

  :root {
  --background: rgb(17, 17, 17);
  --gray: rgb(37, 37, 37);
  --white: rgb(135, 128, 128);
  --salmon: rgb(252, 64, 64);
  --yellow: rgb(252, 176, 64);
}

#root {
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
}

p, a {
  font-family: 'Nunito', sans-serif;
}

body {
  background: var(--background);
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  height: 100%;
}

html {
  display: flex;
  width: 100%;
}

input, button, textarea {
  font: 400 18px Roboto, sans-serif;
}

button {
  cursor: pointer;
}
`;