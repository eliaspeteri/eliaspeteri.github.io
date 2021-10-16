import styled from "styled-components";

export default styled.section`
  background-color: white;
  color: black;
  margin: 0rem 15rem;
  padding: 5rem 5rem;
  #blog-date {
    font-size: 0.9rem;
    color: grey;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem;
    margin: 0;
    top: 0rem;
    left: 0;
    right: 0;
  }
`;
