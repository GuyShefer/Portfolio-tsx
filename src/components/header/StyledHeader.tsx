import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

export const StyledHeader = styled.header`
    background: #000;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
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

export const Toggle = styled.div`
    height: 25px;
    width: 50px;
    border-radius: 50px;
    cursor: pointer;
    margin-left: auto;
    background-image: ${props => props.theme === 'light' ? `linear-gradient(aqua, skyblue)` : `linear-gradient(midnightblue, rebeccapurple)`};
    position: relative;
`;

export const Notch = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${props => props.theme === 'light' ? `yellow` : `whitesmoke`};
    box-shadow: 0 0 5px ${props => props.theme === 'light' ? `yellow` : `whitesmoke`};
    position: absolute;
    top: 2.5px;
    left: 2.5px;
    transform: ${props => props.theme === 'light' ? `translate(25px, 0)` : `translate(0, 0)`};
    transition: 0.3s ease;
`;