import * as React from 'react';
import styled from 'styled-components';
import { moonOutline, heartOutline } from 'ionicons/icons';
import HeaderButton from './HeaderButton.js';

const Header = styled.header`
color: #333333;
background-color: #FFFFFF;
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
color: #0768AC;
`;

const ButtonSpan = styled.span`
margin: 12px 0px;
`;
export default function HeaderComponent() {
    return (
        <Header>
            <HeaderTitle>Web Topics</HeaderTitle>
            <ButtonSpan>
                <HeaderButton buttonText={"Dark Mode"} buttonIcon={moonOutline} onClickEvent={() => { console.log("dark mode") }} />
                <HeaderButton buttonText={"Favourites"} buttonIcon={heartOutline} onClickEvent={() => { console.log("favourites") }} />
            </ButtonSpan>
        </Header>

    );
}