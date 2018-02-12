import React from 'react'; // import react module
import PropTypes from 'prop-types';

//create our Button component as a functional component

class Link extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			href :this.props.href,
			linkText : this.props.linkText
		};
		console.log("Constructor");
	}
	
	render(){
		console.log("render");
		return(
		  <a href={this.props.href}>
			{this.props.linkText}
		  </a> 
		);
	}
}
//export our button component
export default Link;