import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import profilePic from "./img/megamanicon.png"

function ProfileButton() {
    return(
        <ProfileWrapper>
            <ProfileImgWrapper src={profilePic} />
        </ProfileWrapper>
    );
}

const ProfileWrapper = styled.div`
    margin-right: 10px;
    display: flex;
    align-items: center;
`;

const ProfileImgWrapper = styled.img`
    height: 42px;
    width: 42px;
`;

export default ProfileButton;