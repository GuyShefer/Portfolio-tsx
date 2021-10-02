import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import GlobalStyle from './utils/global';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/themes';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="App" style={{ height: '100vh' }}>
        <Router>
          <Header themeToggler={toggleTheme} theme={theme} />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
