import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './Shelf.css';

export default class Shelf extends Component {
  render() {
    return (
      <div className="main-container">
        <nav className="navigation-shelf">
          <div className="shelf-navigation-logo shelf-navigation-logo-width">
          <Link to="/">
            <img className="logo" src={logo} alt="Shelfie"/>
          </Link>
          </div>
          <div className="shelf-navigation-text text">Shelf A</div>
        </nav>
        <div className="shelf-content-container">
          <div className="bin-container">
            <div className="shelf-left-empty"></div>
            <div className="bin-content-container shelf-center border-radius">+ Add inventory to bin</div>
            <div className="shelf-right-empty"></div>
          </div>
          <div className="bin-container">
            <div className="shelf-left-empty"></div>
            <div className="bin-content-container shelf-center border-radius">+ Add inventory to bin</div>
            <div className="shelf-right-empty"></div>
          </div>
          <div className="bin-container">
            <div className="shelf-left-empty"></div>
            <div className="bin-content-container shelf-center border-radius">+ Add inventory to bin</div>
            <div className="shelf-right-empty"></div>
          </div>
          <div className="bin-container">
            <div className="shelf-left-empty"></div>
            <div className="bin-content-container shelf-center border-radius">+ Add inventory to bin</div>
            <div className="shelf-right-empty"></div>
          </div>
          <div className="bin-container">
            <div className="shelf-left-empty"></div>
            <div className="bin-content-container shelf-center border-radius">+ Add inventory to bin</div>
            <div className="shelf-right-empty"></div>
          </div>
        </div>
      </div>
    );
  }
}