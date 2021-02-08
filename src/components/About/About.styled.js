import styled from "styled-components";

export const StyledAbout = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 5rem;
    .grid-container {
        grid-template-columns: auto auto;
        display: inline-grid;
    }
    .grid-item {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    a {
        color: ${({ theme }) => theme.primaryLight};
    }
`;
