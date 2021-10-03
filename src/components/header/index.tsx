import React, { useState } from 'react'
import Nav from '../nav';
import { StyledHeader, HeaderLogo, Hamburger, Toggle, Notch } from './StyledHeader';
import logo from '../../assets/images/logo.png';

const Header = ({ themeToggler, theme }: any) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <StyledHeader>
            <HeaderLogo to="/">
                <img src={logo} alt="logo" width={"80px"}/>
            </HeaderLogo>

            <Toggle onClick={themeToggler} theme={theme}>
                <Notch theme={theme} />
            </Toggle>

            <Hamburger onClick={() => setIsNavOpen(!isNavOpen)} />
            <Nav isOpen={isNavOpen} />

        </StyledHeader>
    )
}

export default Header;
