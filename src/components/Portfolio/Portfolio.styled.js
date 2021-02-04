import styled from "styled-components";
export const StyledPortfolio = styled.div`
    .grid-container {
        grid-template-columns: auto auto;
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
`;
