import styled from "styled-components";

export const StyledNavbar = styled.nav`
    color: ${({ theme }) => theme.primaryLight};
    font-size: 2rem;
    a {
        padding: 1rem;
        color: ${({ theme }) => theme.primaryLight};
    }
    button {
        background: transparent;
        cursor: pointer;
        border: none;
        font-size: 2rem;
        font-family: inherit;
        padding: 1rem;
        color: ${({ theme }) => theme.primaryLight};
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        top: 0%;
        font-size: 12px;
    }
`;
