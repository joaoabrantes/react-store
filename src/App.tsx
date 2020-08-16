import React from 'react';
import './App.css';

// Import Components
import HomePage  from './pages/HomePage/HomePage'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {  
  return (
    <div className="App">
      <header className="App-header">
        <HomePage />
      </header>
    </div>
  );
}

export default App;
