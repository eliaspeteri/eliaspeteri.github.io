import styled from "styled-components";
export const StyledPortfolio = styled.div`
    background-color: white;
    color: black;
    padding: 2rem;
    box-shadow: 6px 6px 2px 1px #969696;
    -webkit-box-shadow: 6px 6px 2px 1px #969696;
    text-align: left;
    #closeElements {
        position: relative;
        bottom: 0%;
        color: red;
    }
    z-index: 1;
    .grid-container {
        grid-template-columns: auto auto;
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
        .grid-container {
            grid-template-columns: auto;
        }
        transition: top ease 0.5s;
        top: 6rem;
        position: absolute;
        left: 0px;
        right: 0px;
    }
`;
