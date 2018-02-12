import React, { Component } from 'react';
import PropTypes from 'prop-types';

//create our inputPassword component as a functional component

class inputPassword extends React.Component{
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
			<input type="password" onClick={this.handleClick} value={this.state.label} 
			/> 
		);
	}
}
//export our inputPassword component
export default inputPassword;