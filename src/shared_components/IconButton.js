import React from "react";
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';

const Button = styled.button`
font-size: 15px;
border-radius: 5px;
border: solid 1px var(--lines-color);
padding: 6px 6px;
margin-left: 3px;
font-weight: 600;
text-align: center;
color: var(--body-text);
background-color: var(--bg_default);

@media screen and (max-width: 490px) {
    font-size: 0px;
}
`;

const StyledIcon = styled(IonIcon)`
vertical-align: middle;
padding-right: 3px;
font-size: 17px;
`;

export default function IconButton({ buttonText, buttonIcon, onClickEvent }) {
    const EventHandler = () => {onClickEvent()}
    return (
        <Button onClick={EventHandler}>
            <StyledIcon icon={buttonIcon} />
            {buttonText}
        </Button>
    );
}