import React, { Component } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './Shelf.css';

export default class Shelf extends Component {
  constructor() {
    super();
    this.state = {
      bins: []
    }
  }

  componentWillMount() {
    axios.get('/bins')
    .then(response => {
      this.setState({ bins: response.data})
      console.log(response);
      console.log('bins ', this.state.bins);
      console.log(this.props);
    })
  }

  render() {
    return (
      <div className="main-container">
      <h1></h1>
        <nav className="navigation-shelf">
          <div className="shelf-navigation-logo shelf-navigation-logo-width">
          <Link to="/">
            <img className="logo" src={logo} alt="Shelfie"/>
          </Link>
          </div>
          <div className="shelf-navigation-text text">Shelf { this.props.match.params.bin }</div>
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