import styled from 'styled-components';

export const Line = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

flex: 1;
height: 80px;

div {
  padding: 12px;
  height: 100%;
}
`;

export const List = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

a {
  text-decoration: none;
  color: var(--white);
  filter: brightness(60%);
  transition: all ease 0.2s;
  font-size: 16px;
  margin: 0px 2rem;

  &:hover {
    filter: brightness(180%);
  }
}
`;

export const Container = styled.div``;

export const Box = styled.div`
border-right: 2px solid var(--gray);
display: flex;
align-items: center;

img {
  height: 60px;
  width: 140px;
}
`;

export const Footer = styled.div`
display: flex;
height: 20px;
background: #f8edeb;
align-items: center;
justify-content: flex-start;
padding-left: 4px;

p {
 font-size: 12px;
 font-weight: bold;
 color: var(--gray);
}
`;