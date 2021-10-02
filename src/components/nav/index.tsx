import React from 'react'
import { StyledNav, NavLink } from './StyledNav'


const Nav = ({ isOpen }:any) => {
    return (
        <StyledNav isOpen={isOpen}>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Projects</NavLink>
            <NavLink to="/">Contact</NavLink>
        </StyledNav>
    )
}

export default Nav;
