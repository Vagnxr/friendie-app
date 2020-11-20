import styled, { keyframes, css } from "styled-components";
import { IBoxStyles, IMenuStyles } from "./interfaces";

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

export const Line = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  flex: 1;
  height: 80px;
`;

export const List = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--white);
    filter: brightness(150%);
    transition: all ease 0.2s;
    font-size: 16px;
    margin: 0px 2rem;

    &:hover {
      filter: brightness(200%);
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
`;

export const Box = styled.div<IBoxStyles>`
  border-right: 2px solid var(--gray);
  display: flex;
  align-items: center;
  position: relative;
  padding: 12px;
  height: 100%;


  ${(props) =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}

  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}

    ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}

  img {
    height: 80px;
    width: 80px;
  }

  svg {
    color: var(--white);
    transition: all ease 0.2s;

    &:hover {
      filter: brightness(180%);
    }
  }

  &.input {
    svg {
      display: none;
    }

    @media (max-width: 585px) {
      svg {
        display: flex;
      }
      input {
        display: none;
      }
    }
  }

  @media (max-width: 585px) {
    &.input {
      flex: 1;
      justify-content: center;
    }
  }

  @media (max-width: 915px) {
    &.menu {
      display: none;
    }
  }

  @media (min-width: 411px) {
    &.responsive-input {
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  height: 20px;
  background: #f8edeb;
  align-items: center;
  justify-content: center;
  padding-left: 4px;

  p {
    font-size: 12px;
    font-weight: bold;
    color: var(--gray);
    transition: all ease 1s;
    animation: ${FadeBlur} all forwards 1s;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  height: 100%;
  color: var(--white);
  filter: brightness(150%);
  padding: 0px 12px;
  transition: all ease 0.2s;
  flex: 1;

  &::placeholder {
    color: var(--white);
    filter: brightness(100%);
    font-size: 16px;
    font-family: "Nunito";
  }
`;

export const Popup = styled.div`
  display: none;
  @media (max-width: 585px) {
    display: flex;
    width: 15rem;
    position: absolute;
    top: 4rem;
    background: var(--background);
    animation: ${FadeBlur} linear forwards 0.4s;
    border: 1px solid var(--gray);
    border-radius: 4px;

    z-index: 10;

    input {
      display: flex !important;
    }
  }
`;

export const Menu = styled.div<IMenuStyles>`
  position: absolute;
  width: 10rem;
  background: #111111;
  box-shadow: 6px 6px 0px #0b0b0b, -6px -6px 0px #171717;
  z-index: 10;
  top: calc(100% - 1px);
  transform: translateX(10rem);
  transition: all ease 1s;

  border: 1px solid var(--gray);
  border-radius: 2px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid var(--gray);
    border-left: 3px solid var(--yellow);
    width: 100%;
    height: 4rem;
    border-radius: 2px 0px 0px 2px;

    p {
      color: var(--white);
      margin-left: 0.5rem;
      cursor: pointer;
      transition: all ease 0.2s;

      &:hover {
        filter: brightness(200%);
      }
    }
  }

  ${(props) =>
    props.active &&
    css`
      transform: translateX(-2rem);
    `}
`;
