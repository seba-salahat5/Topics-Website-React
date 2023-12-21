import * as React from 'react';
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
color: #333333;
background-color: #FFFFFF;

@media screen and (max-width: 547px) {
    width: 100%;
}
`;

const StyledIcon = styled(IonIcon)`
vertical-align: middle;
padding-top: 14px;
padding-right: 5px;
`;

const StyledInput = styled.input`
width: 100%;
height: 100%;
border: 0px;
font-size: 17px;
outline: none;
`;

export default function SearchFieldComonent() {
    return (
        <SearchBar>
            <StyledIcon icon={searchOutline}/>
            <StyledInput type="text" id="SearchInput" placeholder="Search the website..."/>
        </SearchBar>
    );
}