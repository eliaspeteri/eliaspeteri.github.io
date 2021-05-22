import styled from "styled-components";

export default styled.div`
  font-size: 5rem;
  span {
    opacity: 1;
    animation: fade 3s linear infinite;
  }
  @keyframes fade {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;
