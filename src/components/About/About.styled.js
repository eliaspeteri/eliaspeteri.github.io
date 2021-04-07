import styled from "styled-components";

export const StyledAbout = styled.div`
    background-color: white;
    color: black;
    top: 5rem;
    box-shadow: 6px 6px 2px 1px #969696;
    -webkit-box-shadow: 6px 6px 2px 1px #969696;
    padding: 2rem;
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
