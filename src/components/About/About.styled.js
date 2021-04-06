import styled from "styled-components";

export const StyledAbout = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 5rem;
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
        p {
            font-size: 1.5rem;
            margin: 0rem 3rem;
        }
        h2 {
            font-size: 3rem;
        }
    }
`;
