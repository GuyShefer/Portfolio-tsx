import React, { useState } from 'react'
import { StyledHeader, HeaderLogo, Hamburger, Nav, NavLink } from './StyledHeader';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <StyledHeader>
            <HeaderLogo to="/">
                <h1>Logo</h1>
            </HeaderLogo>
            <div style={{ marginLeft: 'auto' }}>
                <input type="checkbox" value="checkbox" />
            </div>
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
