import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navigation">
          <div className="main-left-empty"></div>
          <div className="header-container main-center-container text">
            <img className="logo" src={logo} alt="Shelfie"/>
            <span className="header-text">SHELFIE</span>
          </div>
          <div className="main-right-empty"></div>
        </nav>
        
        <div className="main-content-container">
          <div className="main-left-empty"></div>
          <div className="shelf-container main-center-container text border-radius">
            <Link to="/bins/A" className="links">
              <div className="half-shelf-container left-content-container">
                <div className="left-shelf-content-container"></div>
                <div className="shelf-name-container center-shelf-content-container">
                  Shelf A
                </div>
                <div className="right-shelf-content-container"></div>
              </div>
            </Link>
            <div className="right-content-container"></div>
          </div>
          <div className="main-right-empty"></div>
        </div>
      

        <div className="main-content-container">
          <div className="main-left-empty"></div>
          <div className="shelf-container main-center-container text border-radius">
            <Link to="/bins/B" className="links">
            <div className="half-shelf-container left-content-container">
              <div className="left-shelf-content-container"></div>
              <div className="shelf-name-container center-shelf-content-container">
                Shelf B
              </div>
              <div className="right-shelf-content-container"></div>
            </div>
            </Link>
            <div className="right-content-container"></div>
          </div>
          <div className="main-right-empty"></div>
        </div>

        <div className="main-content-container">
          <div className="main-left-empty"></div>
          <div className="shelf-container main-center-container text border-radius">
            <Link to="/bins/C" className="links">
            <div className="half-shelf-container left-content-container">
              <div className="left-shelf-content-container"></div>
              <div className="shelf-name-container center-shelf-content-container">
                Shelf C
              </div>
              <div className="right-shelf-content-container"></div>
            </div>
            </Link>
            <div className="right-content-container"></div>
          </div>
          <div className="main-right-empty"></div>
        </div>
      
        <div className="main-content-container">
          <div className="main-left-empty"></div>
          <div className="shelf-container main-center-container text border-radius">
            <Link to="/bins/D" className="links">
            <div className="half-shelf-container left-content-container">
              <div className="left-shelf-content-container"></div>
              <div className="shelf-name-container center-shelf-content-container">
                Shelf D
              </div>
              <div className="right-shelf-content-container"></div>
            </div>
            </Link>
            <div className="right-content-container"></div>
          </div>
          <div className="main-right-empty"></div>
        </div>
      </div>
    );
  }
}