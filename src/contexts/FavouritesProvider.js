import React, { createContext, useContext, useState, useEffect } from 'react';
import { getFromLocalStorage, setInLocalStorage } from '../local_storage_functions.js';
import {FAV} from '../constants.js';
const FavouritesContext = createContext();

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
};

export let isFav = function (topicId, favorites) {
  if (favorites.some((favTopic) => favTopic.id === topicId)) return true;
  return false;
}

const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(getFromLocalStorage(FAV, []));
  const [isFavShown, setisFavShown] = useState(false);

  useEffect(() => {
    setInLocalStorage(FAV, favourites);
  }, [favourites]);

  const addFavourite = (newFavourite) => {
    if (!isFav(newFavourite.id, favourites)) {
      setFavourites((prevFavourites) => [...prevFavourites, newFavourite]);
    }
  };

  const removeFavourite = (id) => {
    setFavourites((prevFavourites) => prevFavourites.filter((fav) => fav.id !== id));
  };

  function toggleShowingFav() {
    setisFavShown(!isFavShown);
}

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite, isFav: (topicId) => isFav(topicId, favourites), toggleShowingFav, isFavShown}}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;
