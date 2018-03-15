import React, { Component } from 'react';
import './App.css';
import logo from './assets/logo.png';
import routes from './routes/routes';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <nav className="navigation">
          <div className="main-left-empty"></div>
          <div className="header-container main-center-container text">
            <img className="logo" src={logo} alt="Shelfie"/>
            <span className="header-text">SHELFIE</span>
          </div>
          <div className="main-right-empty"></div>
        </nav>
        { routes }
      </div>
    );
  }
}

export default App;
