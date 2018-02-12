import React, { Component } from 'react';
import propTypes from 'prop-types';

//create our CheckBox component as a functional component
class CheckBox extends React.Component {

  constructor(props){
	  super(props);
	   this.state = {
		   label :this.props.label,
		   isChecked: false
	   };
	   console.log("Checkbox -> Constructor - "+JSON.stringify(this.state));
  }
  
  toggleCheckboxChange = () => {
    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
  }
  
  render() {
		console.log("Checkbox -> render - "+JSON.stringify(this.state));
		const checkedOrNot = [];
		checkedOrNot.push(<p>{this.state.isChecked ? 'Checked' : 'Unchecked'}</p>);
		
		return (
			<div className="checkbox">
			<label>
			<input type="checkbox" value={this.state.label} checked={this.state.isChecked} 
				onChange={this.toggleCheckboxChange}
			/>
			{this.state.label}
			</label>
			{//display checked/unchecked status
				checkedOrNot
			} 
			
		</div>
		);
  }
}

  CheckBox.propTypes = {
	label: propTypes.string.isRequired,
  };

//export checkbox component
export default CheckBox;