import React, { Component } from 'react';
import PropTypes from 'prop-types';

//create our inputColor component as a functional component

class inputColor extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			name :"Hello world",
			message : "ES6 says Hello"
		};
		console.log("inputColor -> Constructor - "+JSON.stringify(this.state));
	}
	
	render(){
		console.log("render");
		return(
		 <input type="color" onClick={this.handleClick} value={this.state.label} 
		 /> 
		);
	}
}
//export our inputColor component
export default inputColor;