import styled from "styled-components";

export const StyledAbout = styled.div`
    .grid-container {
        grid-template-columns: auto auto;
        display: inline-grid;
    }
    margin-left: 2rem;
    margin-right: 2rem;
    a {
        color: ${({ theme }) => theme.primaryLight};
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 12px;
        margin-left: 0rem;
        margin-right: 0rem;
    }
`;
