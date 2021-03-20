import styled from "styled-components";
export const StyledPortfolio = styled.div`
    z-index: 1;
    .grid-container {
        grid-template-columns: auto auto;
        display: inline-grid;
        font-size: 2rem;
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
    @media (max-width: ${({ theme }) => theme.mobile}) {
        .grid-container {
            grid-template-columns: auto;
        }
        transition: top ease 0.5s;
        top: 6rem;
        position: absolute;
        left: 0px;
        right: 0px;
    }
`;
