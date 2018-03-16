import React, { Component } from 'react';
import './App.css';
import routes from './routes/routes';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        { routes }
      </div>
    );
  }
}

export default App;
