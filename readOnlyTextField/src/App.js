import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor (props){
		super(props);
		this.state = {
			name :"Hello world",
			message : "ES6 says Hello"
		};
		console.log("Constructor");
	}
  
  ComponentWillMount(){
	  console.log("ComponentWillMount");
  }
  
  ComponentDidMount(){
	  console.log("ComponentDidMount");
  }
  
  
  textChange(e){
	  this.setState({
		  message: e.target.value
	  });
  }

  render() {
	  console.log("render");
	  console.log(this.state);
    return (
	    <div>
			<h2>{this.state.message}</h2>
			 <p> read only TextField</p>
			<input type="text" id="txt" value={this.state.name} />
			<p> Editable TextField</p>
			<input type="text" id="txt2" value={this.state.message} onChange={this.textChange.bind(this)}/>
		</div>
    );
  }
}