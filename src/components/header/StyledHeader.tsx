import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const StyledHeader = styled.header`
    background: #000;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    flex-wrap: wrap;
    /* padding: 2rem 0 ; */
    z-index: 10;
`;

export const HeaderLogo = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 2rem 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`;

export const Hamburger = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        font-size: 1.8rem;
        margin: 0 2rem;
        cursor: pointer;
    }
`;

export const Nav = styled.div<any>`
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
