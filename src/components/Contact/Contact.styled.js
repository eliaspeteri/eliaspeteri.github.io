import styled from "styled-components";

export const StyledContact = styled.p`
    font-family: Segoe UI;
    .grid-container {
        grid-template-columns: auto auto;
        display: inline-grid;
    }
    a {
        color: ${({ theme }) => theme.primaryLight};
    }
`;
