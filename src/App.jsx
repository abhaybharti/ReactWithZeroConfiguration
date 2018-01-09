import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Appx extends Component {
  render() {
	  var helloWorld ="welcome to React via variable";
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
		
      </div>
    );
  }
}