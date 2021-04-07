import styled from "styled-components";

export const StyledResume = styled.div`
    box-sizing: border-box;
    background-color: white;
    display: grid;
    grid-template-columns: auto auto;
    box-shadow: 6px 6px 2px 1px #969696;
    -webkit-box-shadow: 6px 6px 2px 1px #969696;
    overflow: hidden;
    margin-top: 20em;
    margin-bottom: 5rem;
    .grid-container {
        color: black;
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
        margin-top: 70rem;
        margin-bottom: 5rem;
        * {
            box-shadow: 0px 0px 0px 0px;
            -webkit-box-shadow: 0px 0px 0px 0px;
        }
    }
`;
