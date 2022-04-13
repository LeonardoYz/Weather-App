import styled from "styled-components";

export const Container = styled.footer`
  padding-bottom: 1.5rem;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  
  span,
  a {
    color: var(--light-gray);
    font-size: var(--small-font-size);
  }

  a {
    font-weight: 700;
    text-decoration: underline;

    transition: color 280ms ease-in-out;

    &:hover {
      color: var(--yellow);
      text-decoration: none;
    }
  }
`