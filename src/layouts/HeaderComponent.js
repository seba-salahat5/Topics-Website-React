import * as React from 'react';
import styled from 'styled-components';
import { moonOutline, heartOutline } from 'ionicons/icons';
import IconButton from '../shared_components/IconButton.js';

const Header = styled.header`
background-color: var(--bg_default);
padding: 5px 60px 5px 60px;
display: flex;
justify-content: space-between;
align-items: baseline;
position: sticky;
top: 0px;
z-index: 3;
`;

const HeaderTitle = styled.h1`
display: flex;
font-size: 17px;
color: var(--brand-primary);
`;

const ButtonSpan = styled.span`
margin: 12px 0px;
`;
export default function HeaderComponent() {
    return (
        <Header>
            <HeaderTitle>Web Topics</HeaderTitle>
            <ButtonSpan>
                <IconButton buttonText={"Dark Mode"} buttonIcon={moonOutline} onClickEvent={() => { console.log("dark mode") }} />
                <IconButton buttonText={"Favourites"} buttonIcon={heartOutline} onClickEvent={() => { console.log("favourites") }} />
            </ButtonSpan>
        </Header>

    );
}