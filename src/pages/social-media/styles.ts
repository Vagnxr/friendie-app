import styled, { keyframes } from 'styled-components';

export const FadeBlur = keyframes`
0% {
  filter: blur(1rem);
  opacity: 0;
}

100% {
  filter: blur(0rem);
  opacity: 1;
}
`;

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: var(--white);
height: 100%;
animation: ${FadeBlur} linear forwards 0.5s;
`;