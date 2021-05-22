import styled from "styled-components";

export default styled.div`
  position: absolute;
  top: 6rem;
  left: 10rem;
  right: 10rem;
  display: grid;
  grid-template-columns: auto auto;

  padding-bottom: 5rem;
  overflow: hidden;
  .grid-container {
    padding: 0.5rem 1rem;
  }
  .inner {
    display: inline-grid;
    grid-template-columns: auto auto auto;
  }
  .grid-item {
    padding: 0 0.5rem;
    text-align: left;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    top: 3rem;
    left: 0;
    right: 0;
    grid-container {
      display: flex;
      justify-content: center;
    }
  }
`;
