import styled from "styled-components";

export const StyledContact = styled.div`
    font-family: Segoe UI;
    z-index: 1;
    .grid-container {
        grid-template-columns: auto auto;
        display: inline-grid;
        font-size: 2rem;
    }
    a {
        color: ${({ theme }) => theme.primaryLight};
    }
    h2 {
        margin-top: 0px;
    }
    p {
        margin-top: 0px;
        margin-bottom: 0px;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    img {
        background-position: center center;
        background-repeat: no-repeat;
        overflow: hidden;
        width: auto;
        height: 16rem;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        transition: top ease-in-out 0.5s;
        position: absolute;
        left: 0px;
        right: 0px;
        top: 30%;
        .grid-container {
            transition: font-size ease 0.5s;
            font-size: 1.5rem;
            transition: margin ease 0.5s;
            margin: 0rem 3rem;
        }
        .grid-item {
            top: 0%;
        }
        h2 {
            transition: font-size ease 0.5s;
            font-size: 2rem;
        }
    }
`;
