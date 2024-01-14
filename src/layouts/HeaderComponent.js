import React from "react";
import {useTheme} from '../contexts/ThemeProvider.js';
import {useFavourites} from '../contexts/FavouritesProvider.js';
import styled from 'styled-components';
import { moonOutline, heartOutline } from 'ionicons/icons';
import IconButton from '../components/shared/IconButton.js';

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
    const { darkMode ,toggleTheme } = useTheme();
    const {  toggleShowingFav } = useFavourites();
    let buttonText = darkMode ? "Light Mode" : "Dark Mode";
    
    return (
        <Header>
            <HeaderTitle>Web Topics</HeaderTitle>
            <ButtonSpan>
                <IconButton buttonText={buttonText} buttonIcon={moonOutline} onClickEvent={toggleTheme} />
                <IconButton buttonText={"Favourites"} buttonIcon={heartOutline} onClickEvent={toggleShowingFav} />
            </ButtonSpan>
        </Header>

    );
}