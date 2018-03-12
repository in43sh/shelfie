import React, { Component } from 'react';
import './App.css';
import logo from './assets/logo.png';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bins: []
    }
  }

  componentWillMount() {
    axios.get('/bins')
    .then(response => {
      this.setState({ bins:  response.data})
      console.log('bins ', this.state.bins);
    })
  }

  render() {
    const bins = this.state.bins.map((bin, index) => {
      return (
        <div
          key={index}
          className="main-content-container"
          onClick={}>
          <div className="main-left-empty"></div>
          <div className="bin-container main-center-container text border-radius">
            <div className="half-bin-container left-content-container">
              <div className="left-bin-content-container"></div>
              <div className="bin-name-container center-bin-content-container">
                {bin}
              </div>
              <div className="right-bin-content-container"></div>
            </div>
            <div className="right-content-container"></div>
          </div>
          <div className="main-right-empty"></div>
        </div>
      )
    })

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

        { bins }
      </div>
    );
  }
}

export default App;
