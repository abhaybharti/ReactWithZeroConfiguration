import React, { Component } from 'react';
import PropTypes from 'prop-types';

//create our inputDateTime component as a functional component
class inputDateTime extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			name :"Hello world",
			message : "ES6 says Hello"
		};
		console.log("Constructor");
	}
	
	render(){
		console.log("render");
		return(
			<input type="datetime-local" onClick={this.handleClick} value={this.state.label} 
			/> 
		);
	}
}
//export our inputDateTime component
export default inputDateTime;