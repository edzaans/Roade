import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 1.5rem;
  color: #f5d10d;
  font-weight: bold;
`;

export const test = styled.link`
  background: yellow;
`;
