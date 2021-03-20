import styled from "styled-components";

export const StyledNavbar = styled.nav`
    nav {
        margin-left: 3rem;
        margin-right: 3rem;
        background: transparent;
        cursor: pointer;
        border: none;
        font-size: 3rem;
        font-family: inherit;
        padding: 1rem;
        color: ${({ theme }) => theme.primaryLight};
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0rem;
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
        * {
            transition: font-size ease 0.5s;
            font-size: 2rem;
        }
    }
`;
