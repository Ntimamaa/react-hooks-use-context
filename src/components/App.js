import React, { useContext, useState } from 'react';
import Header from './Header';
import Profile from './Profile';
import { UserProvider } from '../context/user';
import {ThemeProvider,ThemeContext} from '../context/theme'

function App() {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <main className={theme}>
      <UserProvider>
        <ThemeProvider>
        <Header theme={theme} setTheme={setTheme} />
        <Profile theme={theme} />
        </ThemeProvider>  
      </UserProvider>
    </main>
  );
}

export default App;
