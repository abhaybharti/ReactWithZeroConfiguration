import React, { Component } from 'react';
import PropTypes from 'prop-types';

//create our label component as a functional component

class label extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			label :this.props.label
		};
		console.log("Constructor");
	}
	
	render(){
		console.log("render");
		return(
			<label for={this.state.label}>{this.state.label}</label>
		);
	}
}
//export our label component
export default label;