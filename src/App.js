import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
{
	title: 'React',
	url: 'https://facebook.github.io/react/',
	author: 'Jordan Walke',
	num_comments: 3,
	points: 4,
	objectID: 0,
},
{
	title: 'Redux',
	url: 'https://github.com/reactjs/redux',
	author: 'Dan Abramov, Andrew Clark',
	num_comments: 2,
	points: 5,
	objectID: 1,
},
];

export default class App extends Component {
  render() {
	  var helloWorld ="welcome to React via variable";
	  const firstName = "Abhay";
	  let lastName = "Bharti4";
	  var text = firstName+lastName;
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
		<h2>{text}</h2>
      </div>
    );
  }
}