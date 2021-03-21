import styled from "styled-components";

export const StyledAbout = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 5rem;
    .grid-container {
        grid-template-columns: auto auto;
        display: grid;
    }
    .grid-item {
        padding: 0rem 1rem;
    }
    .list {
        padding: 0rem 25%;
    }
    .list-item {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    a {
        color: ${({ theme }) => theme.primaryLight};
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        .grid-container {
            grid-template-columns: auto;
        }
        .grid-item {
            transition: font-size ease 0.5s;
            font-size: 1.5rem;
            transition: margin ease 0.5s;
            margin: 1rem 1rem;
        }
        p {
            transition: font-size ease 0.5s;
            font-size: 1.5rem;
            transition: margin ease 0.5s;
            margin: 0rem 3rem;
        }
        h2 {
            transition: font-size ease 0.5s;
            font-size: 2rem;
        }
        h3 {
            transition: font-size ease 0.5s;
            font-size: 1.5rem;
        }
    }
`;
