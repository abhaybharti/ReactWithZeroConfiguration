import React, { Component } from 'react';
import PropTypes from 'prop-types';

//create our inputDate component as a functional component
class inputDate extends React.Component{
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
			<input type="date" onClick={this.handleClick} value={this.state.label} 
			/> 
		);
	}
}
//export our inputDate component
export default inputDate;