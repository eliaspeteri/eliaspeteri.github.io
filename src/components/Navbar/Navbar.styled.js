import styled from "styled-components";

export const StyledNavbar = styled.section`
    position: fixed;
    top: 0rem;
    left: 0;
    right: 0;
    z-index: 1;
    nav {
        display: flex;
        justify-content: right;
        cursor: pointer;
        border: none;
        font-size: 2rem;
        font-family: inherit;
        padding: 0rem 1rem;
        color: ${({ theme }) => theme.primaryLight};
        margin-top: -1rem;
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
        nav {
            font-size: 1.5rem;
            justify-content: center;
        }
    }
`;
