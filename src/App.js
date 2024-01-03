import React, { createContext, useEffect, useState } from 'react';
import { getFromLocalStorage, setInLocalStorage } from './local_storage_functions.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './pages/HomeContainer.js';
import DetailsContainer from './pages/DetailsContainer.js';
import HeaderComponent from './layouts/HeaderComponent.js';
import HeadingComponent from './shared_components/HeadingComponent.js';
import FavouritesComponent from './shared_components/FavouritesComponent.js';
import FooterComponent from './layouts/FooterComponent.js';
import FavouritesProvider from './favourites_functions/FavouritesProvider.js';

import { THEME } from './constants.js';
import './index.css';

export const DarkModeContext = createContext(false);

function App() {
  const [darkMode, setDarkMode] = useState(getFromLocalStorage(THEME) || false);
  const [showFavourites, setShowFavourites] = useState(false);

  useEffect(() => {
    setInLocalStorage(THEME, darkMode);
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleTheme }}>
      <div style={{ backgroundColor: darkMode ? 'var(--dark_bg_body)' : 'var(--bg_body)', color: darkMode ? 'var(--dark_body-text)' : 'var(--body-text)' }}>
        <React.StrictMode>
          <FavouritesProvider>
            <BrowserRouter>
              <>
                <HeaderComponent handleFavBtn={() => { setShowFavourites(!showFavourites); console.log(showFavourites) }} />
                <HeadingComponent />
                <Switch>
                  <Route exact path="/" component={HomeContainer} />
                  <Route path="/details" component={DetailsContainer} />
                </Switch>
                <>
                  {showFavourites ? (
                    <>
                      <FavouritesComponent/>
                    </>

                  ) : (
                    <></>
                  )}
                </>
                <FooterComponent />
              </>
            </BrowserRouter>
          </FavouritesProvider>
        </React.StrictMode>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
