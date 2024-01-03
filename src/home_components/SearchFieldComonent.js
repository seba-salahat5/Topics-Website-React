import React, {useState} from 'react';
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import {useDebounce} from '../customized_hooks/useDebounce.js';

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


export default function SearchFieldComonent({placeholder, onInput}) {
    const [inputValue, setInputValue] = useState('');
    useDebounce(inputValue, onInput);

    const handleInputChange = (event) => {
      const value = event.target.value;
      setInputValue(value);
    };

    return (
        <SearchBar>
            <StyledIcon icon={searchOutline} />
            <StyledInput type="text" id="SearchInput" placeholder={placeholder} onInput={handleInputChange}/>
        </SearchBar>
    );
}