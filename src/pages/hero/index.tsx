import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
    background: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding-top: 12vh;
`;

const BlobContainerTop = styled.div`
    width: 100%;
    position: absolute;
    z-index: 5;
`;

const BlobContainerBottom = styled.div`
    width: 120%;
    position: absolute;
`;

const LeftHeroContainer = styled.div`
    width: 60%;
    height: 100%;
    position: relative;
    height: '350px';
    display: flex;
    align-items: center;
`;
const RightHeroContainer = styled.div`
    border: 1px solid #fff;
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContentContainer = styled.div`
    position: absolute;
    width: 75%;
    height: 27%;
    left: 20%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const HeroTitle = styled.h1`
    font-size: 5em;

    @media (max-width: 1000px) {
        font-size: 3em;
    }
`;

const HeroSecondTitle = styled.h2`
    font-size: 1.75em;
    font-weight: 400;
    letter-spacing: 1.5px;

    @media (max-width: 1000px) {
        font-size: 1.25em;
    }
`;

const Button = styled.button`
    color: #fff;
    font-size: 1em;
    width: 30%;
	background: rgb(0,191,255);
    margin-top: 2em;
	padding: 0.5em 1em;
	border-radius: 4px;
	border: none;
	transition: all 0.4s ease 0s;
    cursor: pointer;

    &:hover {
        background: rgba(34, 49, 63, 1);
        letter-spacing: 1px;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.4s ease 0s;
    }
`;

const Hero = () => {
    return (
        <HeroContainer>
            <LeftHeroContainer>
                <BlobContainerBottom>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="rgba(75, 119, 190, 1)" d="M52.4,-14.6C59.9,6.2,52.6,34.3,37.5,43.4C22.3,52.4,-0.7,42.5,-19.5,28.5C-38.2,14.4,-52.8,-3.7,-48.8,-19.6C-44.9,-35.5,-22.4,-49.2,0,-49.2C22.4,-49.2,44.8,-35.5,52.4,-14.6Z" transform="translate(80 100) scale(-1, 1)" />
                    </svg>
                </BlobContainerBottom>
                <BlobContainerTop>
                    <svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="rgba(52, 73, 94, 0.3)" d="M62.4,-29.5C72.2,-19,65.5,7.5,52.4,24.8C39.3,42.1,19.6,50.2,-1.7,51.2C-23,52.2,-46,46,-53.2,32.2C-60.4,18.3,-51.8,-3.3,-40.3,-14.8C-28.8,-26.3,-14.4,-27.7,6,-31.1C26.3,-34.5,52.6,-40,62.4,-29.5Z" transform="translate(70 90)" />
                    </svg>
                </BlobContainerTop>
                <ContentContainer>
                    <HeroTitle>Guy Shefer</HeroTitle>
                    <HeroSecondTitle>Full Stack Developer</HeroSecondTitle>
                    <Button>About Me</Button>
                </ContentContainer>
            </LeftHeroContainer>

            <RightHeroContainer>
                right container
            </RightHeroContainer>

        </HeroContainer>
    )
}

export default Hero;
