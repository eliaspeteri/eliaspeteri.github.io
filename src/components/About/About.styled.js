import styled from "styled-components";

export const StyledAbout = styled.div`
    position: absolute;
    top: 3rem;
    left: 0;
    right: 0;
    margin: 5rem 10rem;
    padding: 3rem;
    .list-container {
        margin-left: -5rem;
    }
    .list-item {
        list-style-type: none;
    }
    a {
        color: ${({ theme }) => theme.primaryLight};
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin: 0;
    }
`;
