import React, { createContext, useEffect, useState } from 'react';
import { getFromLocalStorage, setInLocalStorage } from './local_storage_functions.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './pages/HomeContainer.js';
import DetailsContainer from './pages/DetailsContainer.js';
import { THEME } from './constants.js';
import './index.css';

export const DarkModeContext = createContext(false);

function App() {
  const [darkMode, setDarkMode] = useState(getFromLocalStorage(THEME) || false);
  useEffect(() => {
    setInLocalStorage(THEME, darkMode);
  }, [darkMode]);
  function toggleTheme() {
    setDarkMode(!darkMode);
  }
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleTheme }}>
      <div style={{backgroundColor: darkMode ? 'var(--dark_bg_body)' : 'var(--bg_body)', color: darkMode ? 'var(--dark_body-text)' : 'var(--body-text)' }}>
        <React.StrictMode>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/details" component={DetailsContainer} />
            </Switch>
          </BrowserRouter>
        </React.StrictMode>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
