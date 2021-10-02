import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const StyledNav = styled.div<any>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${props => props.isOpen ? "300px" : "0"};
        transition: max-height 0.3s ease-in;
        background: gray;
        justify-content: space-evenly;
    }
`;

export const NavLink = styled(Link)`
    padding: 0 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #fff;
    transition: all 0.3s ease-in;
    font-size: 1.5rem;

    &:hover {
        color: #7b7fda;
    }

    @media screen and (max-width: 768px) {
        padding: 1.25rem 0;
        width: 100%;
    }
`;