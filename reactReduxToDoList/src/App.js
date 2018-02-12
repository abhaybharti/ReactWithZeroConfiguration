import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';


export default class App extends Component {
  
  ComponentWillMount(){
	  console.log("App -> ComponentWillMount");
  }
  
  ComponentDidMount(){
	  console.log("App -> ComponentDidMount");
  }
  
  
  render() {
	  console.log("App -> render");
	  console.log(this.state);
	return (
	    <div>
			<Counter />
		</div>
    );
  }
}