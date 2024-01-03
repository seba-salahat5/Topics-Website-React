import React from "react";
import styled from 'styled-components';
import FavouriteCardComponent from '../shared_components/FavouriteCardComponent';
import { useFavourites } from '../contexts/FavouritesProvider';

const FavouritesPanel = styled.div`
position: sticky;
padding-inline: 60px;
padding-block: 15px;
bottom: 0;
z-index: 2;
color: var(--body-text);
background-color: var(--bg_default);
`;

const FavoritesFlexbox = styled.div`
display: flex;
flex-direction: row;
`;

export default function FavouritesContainer() {
    const { favourites } = useFavourites();
    console.log(favourites);
    return (
        <FavouritesPanel>
            <h1> My Favourite Topics</h1>
            <FavoritesFlexbox>
                {favourites.map((topic) => (
                    <FavouriteCardComponent key={topic.id} image={topic.image} topic={topic.topic} rating={topic.rating} />
                ))}
            </FavoritesFlexbox>
        </FavouritesPanel>
    );
}
