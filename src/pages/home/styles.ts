import styled, { keyframes } from "styled-components";

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
  justify-content: flex-start;
  align-items: center;
  color: var(--white);
  height: 100%;
  animation: ${FadeBlur} linear forwards 0.5s;

  @media (max-width: 915px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--gray);
  border-left: 1px solid var(--gray);
  padding: 1rem;
  height: 100%;
  flex: 1;

  @media (max-width: 915px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-top: 1px solid var(--gray);

  span {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    filter: brightness(150%);
    font-size: 14px;

    label {
      border: 2px solid var(--gray);
      border-radius: 2px;
      padding: 2px 4px;
    }

  }
  h1 {
    color: var(--white);
    filter: brightness(180%);
    margin-top: 1rem;
  }

  img {
    height: 60%;
    width: 60%;
  }
`;
