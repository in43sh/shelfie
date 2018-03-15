import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends Component {
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
      console.log('bins ', this.state.bins);
    })
  }

  chooseBin(id) {
    <Link></Link>
  } 
  render() {
    const bins = this.state.bins.map((bin, index) => {
      return (
        <div
          key={index}
          className="main-content-container"
          onClick={() => this.chooseBin(index)}>
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
      <div>
        { bins }
      </div>
    );
  }
}