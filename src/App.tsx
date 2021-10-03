import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Hero from './pages/hero';
import GlobalStyle from './utils/global';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './utils/themes';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <div className="App" style={{ height: '100vh' }}>
        <Router>
          <Header themeToggler={toggleTheme} theme={theme} />
          <Hero />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
