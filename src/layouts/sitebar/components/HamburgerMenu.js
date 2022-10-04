import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import hamburgerLogo from './img/hamburger.png'

function HamburgerMenu() {
    return(
        <HamburgerMenuWrapper>
            <HamburgerInputWrapper type={"checkbox"} />
            {/*<HamburgerMenuImgWrapper src={hamburgerLogo} />*/}
            <HamburgerMenuIconWrapper>
                <div></div>
            </HamburgerMenuIconWrapper>
        </HamburgerMenuWrapper>
    );
}

const HamburgerMenuWrapper = styled.div`
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        display: none;
    }
`;

const HamburgerInputWrapper = styled.input`
    height: 42px;
    width:42px;
    cursor: pointer;
    z-index: 1001;
    margin: 0;
    opacity: 0;
    position: absolute;
`;

const HamburgerMenuIconWrapper = styled.div`
    
`;

const HamburgerMenuImgWrapper = styled.img`
    height: 42px;
    width: 42px;
`;

export default HamburgerMenu;