import styled from "styled-components";

export const StyledContact = styled.p`
    font-family: Segoe UI;
    a {
        color: ${({ theme }) => theme.primaryLight};
    }
`;
