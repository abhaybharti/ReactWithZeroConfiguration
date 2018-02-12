import React from 'react'; // import react module
import PropTypes from 'prop-types';

//create our Button component as a functional component

class Img extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			src : this.props.src,
			alt : this.props.alt,
			height : this.props.height,
			width : this.props.width
		};
		console.log("Img -> Constructor - "+JSON.stringify(this.state));
	}
	
	render(){
		console.log("render");
		return(
		  <img src={this.state.src} alt={this.state.alt} height={this.state.height} width={this.state.width} /> 
		);
	}
}
//export our button component
export default Img;