import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
    background: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;


const Hero = () => {
    return (
        <HeroContainer>
            Hero
        </HeroContainer>
    )
}

export default Hero;
