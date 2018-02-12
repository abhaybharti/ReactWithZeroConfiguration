import React from 'react'; // import react module
import PropTypes from 'prop-types';

//create our Button component as a functional component

class textField extends React.Component{
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
		 <h2>THis is Ab </h2>
		);
	}
}
//export our button component
export default textField;