import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import GlobalStyle from './utils/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
