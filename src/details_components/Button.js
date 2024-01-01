import React, {useContext} from "react";
import {DarkModeContext} from "../App";
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';

const StyledButton = styled.button`
border: none;
display: inline-block;
padding: 10px;
margin-top: 10px;
margin-bottom: 10px;
color: var(--dark_body-text);
background-color: var(--brand-secondary);
text-align: center;
width: 100%;
font-size: 16px;
font-weight: 400;
border-radius: 3px;

white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

const StyledIcon = styled(IonIcon)`
vertical-align: middle;
padding-left: 5px;
font-size: 25px;
color: var(--dark_body-text);
margin: 0px;
`;

export default function Button({ buttonText, buttonIcon, onClickEvent }) {
    const { darkMode  } = useContext(DarkModeContext);
    return (
        <StyledButton className={darkMode?'dark-mode':'light-mode'} onClick={onClickEvent}>
            {buttonText}
            <StyledIcon icon={buttonIcon} />
        </StyledButton>
    );
}