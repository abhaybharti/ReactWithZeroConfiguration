import React, { Component } from 'react';
import PropTypes from 'prop-types';

//create our Button component as a functional component

class Select extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			name :"Hello world",
			message : "ES6 says Hello"
		};
		console.log("select -> Constructor - "+JSON.stringify(this.state));
	}
	
	render(){
		console.log("render");
		return(
		 <h2>THis is Ab </h2>
		);
	}
}
//export our button component
export default Select;