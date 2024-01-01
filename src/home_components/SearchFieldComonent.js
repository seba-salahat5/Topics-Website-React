import React from "react";
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';

const SearchBar = styled.span`
width: 90%;
display: flex;
justify-content: space-around;
align-items: baseline;
padding: 5px 10px 5px 10px;
margin-right: 2px;
background-color: var(--bg_default);

@media screen and (max-width: 547px) {
    width: 100%;
}
`;

const StyledIcon = styled(IonIcon)`
vertical-align: middle;
padding-top: 14px;
padding-right: 5px;
color: var(--body-text);
`;

const StyledInput = styled.input`
width: 100%;
height: 100%;
border: 0px;
font-size: 17px;
background-color: var(--bg_default);
outline: none;
color: var(----body-text);
`;

export default function SearchFieldComonent() {
    return (
        <SearchBar>
            <StyledIcon icon={searchOutline} />
            <StyledInput type="text" id="SearchInput" placeholder="Search the website..." />
        </SearchBar>
    );
}