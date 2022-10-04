import React, { Component } from 'react';
import styled, { css } from 'styled-components';

function CenterLinks() {
    return(
        <CenterLinksWrapper>
            <LinkWrapper>Link 1</LinkWrapper>
            <LinkWrapper>Link 2</LinkWrapper>
            <LinkWrapper>Link 3</LinkWrapper>
            <LinkWrapper>Link 4</LinkWrapper>
        </CenterLinksWrapper>
    );
}

const CenterLinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 767px) {
        display: none;
    }
`;

const LinkWrapper = styled.div`
    margin: 0 1em;
`;

export default CenterLinks;