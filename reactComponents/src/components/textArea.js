import React, { Component } from 'react';
import PropTypes from 'prop-types';

//create our Button component as a functional component

class textArea extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			name : this.props.name,
			rows :this.props.row,
			cols : this.props.cols
		};
		console.log("textArea -> Constructor" + JSON.stringify(this.state));
	}
	
	render(){
		console.log("textArea->render");
		return(
			<textarea name={this.state.name} rows={this.state.row} cols={this.state.cols}
			/>
		);
	}
}
//export our button component
export default textArea;