import React, { Component } from 'react';
import PropTypes from 'prop-types';

//create our Button component as a functional component

class inputText extends React.Component{
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
			<input type="text" onClick={this.handleClick} value={this.state.label} 
			/> 
		);
	}
}
//export our button component
export default inputText;