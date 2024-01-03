import React from "react";
import { useFavourites } from '../contexts/FavouritesProvider.js';
import HeaderComponent from './HeaderComponent.js';
import HeadingComponent from "./HeadingComponent.js";
import FooterComponent from "./FooterComponent.js";
import FavouritesContainer from '../containers/FavouritesContainer.js';

export default function Layout({ children }) {
    const { isFavShown } = useFavourites();
    return (
        <>
            <HeaderComponent />
            <HeadingComponent />
            { children }
            <>
              {isFavShown && (
                <>
                  <FavouritesContainer />
                </>
              )}
            </>
            <FooterComponent/>

        </>
    );
}