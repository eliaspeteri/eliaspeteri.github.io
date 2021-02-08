import styled from "styled-components";

export const StyledContact = styled.div`
    font-family: Segoe UI;
    .grid-container {
        grid-template-columns: auto auto;
        display: inline-grid;
    }
    a {
        color: ${({ theme }) => theme.primaryLight};
    }
    h2 {
        margin-top: 0px;
    }
    p {
        margin-top: 0px;
        margin-bottom: 0px;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    img {
        background-position: center center;
        background-repeat: no-repeat;
        overflow: hidden;
        width: auto;
        height: 12rem;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 7rem;
    }
`;
