import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './layouts/Layout.js';
import HomeContainer from './containers/HomeContainer.js';
import DetailsContainer from './containers/DetailsContainer.js';
import FavouritesProvider from './contexts/FavouritesProvider.js';
import ThemeProvider from './contexts/ThemeProvider.js';


function App() {
  return (
    <ThemeProvider>
      <FavouritesProvider>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/details" component={DetailsContainer} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </FavouritesProvider>
    </ThemeProvider>
  );
}

export default App;