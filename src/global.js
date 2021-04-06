import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }
  div {
    text-align: center;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
  nav {
      position:fixed;
      top: 0.5rem;
      left: 0;
      right: 0;
  }
  footer {
    position:fixed;
    bottom:0.5rem;
    right:1rem;
  }
  footer img {
      position:relative;
      bottom: 0.2rem;
      width: 4rem;
      height: auto;
      padding-right: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
      footer {
          left: 0;
          right: 0;
      }
  }
`;
