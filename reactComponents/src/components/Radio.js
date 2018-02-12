import React, { Component } from 'react';
import PropTypes from 'prop-types';

//create our radio component as a functional component

class radio extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			name :this.props.name,
			isChecked : this.props.checked,
			value : this.props.value
		};
		console.log("Constructor");
	}
	
	render(){
		console.log("render");
		return(
			<label>
			<input type="radio" name={this.state.name} value={this.state.value} checked={this.state.isChecked} 
			/> 
			{this.state.name}
			</label>
		);
	}
}
//export our radio component
export default radio;