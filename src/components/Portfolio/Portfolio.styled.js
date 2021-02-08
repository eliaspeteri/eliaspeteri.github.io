import styled from "styled-components";
export const StyledPortfolio = styled.div`
    .grid-container {
        grid-template-columns: auto auto auto;
        display: inline-grid;
    }
    .grid-item {
        padding: 1rem;
    }
    a {
        color: ${({ theme }) => theme.primaryLight};
    }
    a::hover {
        color: ${({ theme }) => theme.primaryHover};
    }
    button::hover {
        color: ${({ theme }) => theme.primaryHover};
    }
    h2 {
        cursor: pointer;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 5rem;
    }
`;
