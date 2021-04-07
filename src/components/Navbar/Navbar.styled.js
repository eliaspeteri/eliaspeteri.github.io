import styled from "styled-components";

export const StyledNavbar = styled.nav`
    nav {
        text-align: right;
        background-color: black;
        cursor: pointer;
        border: none;
        font-size: 2rem;
        font-family: inherit;
        padding: 1rem;
        color: ${({ theme }) => theme.primaryLight};
        position: fixed;
        margin-top: -1rem;
        right: -1rem;
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
            font-size: 1rem;
            left: 0;
            right: 0;
            background-color: black;
        }
    }
`;
