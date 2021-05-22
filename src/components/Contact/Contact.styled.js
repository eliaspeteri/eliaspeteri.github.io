import styled from "styled-components";

export default styled.div`
  font-family: Segoe UI;
  z-index: 1;
  background-color: white;
  color: black;
  padding: 2rem;
  .grid-container {
    grid-template-columns: auto auto;
    display: inline-grid;
    font-size: 2rem;
  }
  .grid-item {
    text-align: left;
  }
  a {
    color: ${({ theme }) => theme.primaryDark};
  }
  h2 {
    margin-top: 0px;
  }
  h6 {
    margin: 0;
  }
  p {
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 0rem;
  }
  img {
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    width: auto;
    height: 21.3rem;
    margin-right: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    transition: top ease-in-out 0.5s;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 10rem;
    .grid-container {
      grid-template-columns: auto;
      font-size: 1.5rem;
      margin: 0rem 3rem;
    }
    .grid-item {
      margin-bottom: 2rem;
    }
    img {
      width: 20rem;
      height: auto;
    }
  }
`;
