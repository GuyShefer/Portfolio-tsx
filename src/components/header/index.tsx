import React, { useState } from 'react'
import styled from 'styled-components';
import { StyledHeader, HeaderLogo, Hamburger, Nav, NavLink } from './StyledHeader';

const Toggle = styled.div`
    height: 25px;
    width: 50px;
    border-radius: 50px;
    cursor: pointer;
    margin-left: auto;
    background-image: ${props => props.theme === 'light' ? `linear-gradient(aqua, skyblue)` : `linear-gradient(midnightblue, rebeccapurple)`};
    position: relative;
`;

const Notch = styled.div`
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


const Header = ({ themeToggler, theme }: any) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <StyledHeader>
            <HeaderLogo to="/">
                <h1>Logo</h1>
            </HeaderLogo>

            <Toggle onClick={themeToggler} theme={theme}>
                <Notch theme={theme}/>
            </Toggle>

            <Hamburger onClick={() => setIsNavOpen(!isNavOpen)} />
            <Nav isOpen={isNavOpen}>
                <NavLink to="/">About</NavLink>
                <NavLink to="/">Projects</NavLink>
                <NavLink to="/">Contact</NavLink>
            </Nav>

        </StyledHeader>
    )
}

export default Header;
