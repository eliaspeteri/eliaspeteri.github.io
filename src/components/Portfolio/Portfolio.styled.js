import styled from "styled-components";

export default styled.div`
  background-color: white;
  color: black;
  padding: 2rem;
  text-align: left;
  #closeElements {
    position: relative;
    top: 0;
    color: red;
  }
  z-index: 1;
  .grid-container {
    grid-template-columns: auto auto auto;
    display: inline-grid;
    font-size: 2rem;
  }
  .grid-item {
    padding: 1rem;
  }
  a {
    color: ${({ theme }) => theme.primaryDark};
  }
  a::hover {
    color: ${({ theme }) => theme.primaryHover};
  }
  .projectContainer {
    background-color: white;
    padding: 10rem, 0rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    top: 3rem;
    left: 0;
    right: 0;
    .grid-container {
      grid-template-columns: auto;
    }
    .project-container {
      display: grid;
    }
  }
`;
