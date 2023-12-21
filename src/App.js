import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './pages/HomeContainer.js';
import DetailsContainer from './pages/DetailsContainer.js'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/details" component={DetailsContainer} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
