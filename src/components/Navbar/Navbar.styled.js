import styled from "styled-components";

export const StyledNavbar = styled.nav`
    color: ${({ theme }) => theme.primaryLight};
    position: absolute;
    left: 0px;
    right: 0px;
    top: 1rem;
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
        font-size: 1rem;
    }
`;
