import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
all: unset;
`;

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&display=swap');

  :root {
  --background: rgb(27, 27, 27);
  --gray: rgb(37, 37, 37);
  --white: rgb(135, 128, 128);
  --salmon: rgb(252, 64, 64);
  --yellow: rgb(252, 176, 64);
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

p, a {
  font-family: 'Raleway', sans-serif;

}

body {
  background: var(--background);
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
}

input, button, textarea {
  font: 400 18px Roboto, sans-serif;
}

button {
  cursor: pointer;
}
`;