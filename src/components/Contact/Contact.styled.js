import styled from "styled-components";

export const StyledContact = styled.p`
    font-family: Segoe UI;
    .grid-container {
        grid-template-columns: auto auto;
        display: inline-grid;
    }
    a {
        color: ${({ theme }) => theme.primaryLight};
    }
    p {
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
`;
