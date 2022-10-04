import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import NavbarLogo from "./components/NavbarLogo";
import ProfileButton from "./components/ProfileButton";
import CenterLinks from "./components/CenterLinks";
import Hamburger from "./components/Hamburger";

class Sitebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SitebarWrapper>
                <Hamburger />
                <NavbarLogo />
                <CenterLinks />
                <ProfileButton />
            </SitebarWrapper>
        );
    }
}

const SitebarWrapper = styled.div`
        background: #000;
        color: #FFF;
        height: 60px;
        position: fixed;
        top: 0px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
    `;

export default Sitebar;