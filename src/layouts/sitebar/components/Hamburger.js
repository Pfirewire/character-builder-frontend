import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import hamburgerLogo from './img/hamburger.png'

function Hamburger() {
    return(
        <HamburgerWrapper>
            <HamburgerImgWrapper src={hamburgerLogo} />
        </HamburgerWrapper>
    );
}

const HamburgerWrapper = styled.div`
    margin-left: 10px;
    display: flex;
    align-items: center;
    @media (min-width: 768px) {
        display: none;
    }
`;

const HamburgerImgWrapper = styled.img`
    height: 42px;
    width: 42px;
`;

export default Hamburger;