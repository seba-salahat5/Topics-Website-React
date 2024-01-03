import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './pages/HomeContainer.js';
import DetailsContainer from './pages/DetailsContainer.js';
import HeaderComponent from './layouts/HeaderComponent.js';
import HeadingComponent from './shared_components/HeadingComponent.js';
import FavouritesComponent from './shared_components/FavouritesComponent.js';
import FooterComponent from './layouts/FooterComponent.js';
import FavouritesProvider from './context_functions/FavouritesProvider.js';
import ThemeProvider from './context_functions/ThemeProvider.js';
import './index.css';



function App() {
  const [showFavourites, setShowFavourites] = useState(false);
  return (
    <ThemeProvider>
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
                {showFavourites && (
                  <>
                    <FavouritesComponent />
                  </>
                )}
              </>
              <FooterComponent />
          </>
        </BrowserRouter>
      </FavouritesProvider>
    </ThemeProvider>
  );
}

export default App;