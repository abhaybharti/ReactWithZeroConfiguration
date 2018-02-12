import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import CheckBox from './components/CheckBox';
import Img from './components/img';
import inputColor from './components/inputColor';
import inputDate from './components/inputDate';
import inputDateTime from './components/inputDateTime';
import inputEmail from './components/inputEmail';
import inputPassword from './components/inputPassword';
import inputText from './components/inputText';
import label from './components/label';
import Link from './components/link';
import Radio from './components/Radio';
import Select from './components/Select';
import SelectMultiple from './components/SelectMultiple';
import textArea from './components/textArea';
import ItemList from './components/ItemList';

export default class App extends Component {
  constructor (props){
		super(props);
		this.state = {
			name :"Hello world",
			message : "ES6 says Hello"
		};
		console.log("App -> Constructor");
	}
  
  ComponentWillMount(){
	  console.log("App -> ComponentWillMount");
  }
  
  ComponentDidMount(){
	  console.log("App -> ComponentDidMount");
  }
  
  
  textChange(e){
	  console.log("App -> textChange()");
	  this.setState({
		  message: e.target.value
	  });
  }

  render() {
	  console.log("App -> render");
	  console.log(this.state);
	  //<CheckBox label="AB" handleCheckboxChange={this.toggleCheckbox} key="AB" />
	  //<Button label="Click Me"/>
    return (
	    <div>
			<ItemList />
		</div>
    );
  }
}