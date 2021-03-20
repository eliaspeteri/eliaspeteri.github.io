import styled from "styled-components";

export const StyledNavbar = styled.nav`
    nav {
        background: transparent;
        cursor: pointer;
        border: none;
        font-size: 2rem;
        font-family: inherit;
        padding: 1rem;
        color: ${({ theme }) => theme.primaryLight};
        position: absolute;
        left: 0px;
        right: 0px;
        top: 1rem;
    }
    a {
        padding: 1rem;
        color: ${({ theme }) => theme.primaryLight};
    }
    a::hover {
        color: ${({ theme }) => theme.primaryHover};
    }
    color: ${({ theme }) => theme.primaryLight};
    @media (max-width: ${({ theme }) => theme.mobile}) {
        transition: font-size ease-in-out 0.5s;
        font-size: 1rem;
    }
`;
