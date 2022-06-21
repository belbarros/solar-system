import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
      </div>
    );
  }
}

export default App;
