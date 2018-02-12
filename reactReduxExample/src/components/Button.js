import React, { Component } from 'react';
import propTypes from 'prop-types';

//create our Button component

class Button extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			label :this.props.label
		};
		console.log("Button -> Constructor - "+JSON.stringify(this.state));
	}
	
	handleClick= () => {
		console.log('Button is clicked!!');
	}
	
	render(){
		console.log("render");
		return(
			<input type="button" onClick={this.handleClick} value={this.state.label} 
			/> 
		);
	}
}

  Button.propTypes = {
	label: propTypes.string.isRequired,
  };
  
//export our button component
export default Button;