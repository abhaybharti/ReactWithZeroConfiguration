import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

export default class App extends Component {
  constructor(props){
	  super(props);
	  this.state = {
		  data: ''		  
	  };
  }
  
  onChange = (event) => {
    this.setState({term: event.target.value});
  }
  
	handleClick = (event) => {
		event.preventDefault();
		var el = event.target;
		console.log("button was clicked");
		this.setState({
			data: [...this.state.num, this.state.operation]
		});
	}

  render() {
    return (
		<div> 
			<input value={this.state.num} onChange={this.handleClick} />
			<div>
				<Button label="7" onChange={this.handleClick}></Button>
				<Button label="8" onclick="console.log('The link was clicked.'); return false"></Button>
				<Button label="9"></Button>
				<Button label="/"></Button>
			</div>
			<div>
				<Button label="4"></Button>
				<Button label="5"></Button>
				<Button label="6"></Button>
				<Button label="*"></Button>
			</div>
			<div>
				<Button label="1"></Button>
				<Button label="2"></Button>
				<Button label="3"></Button>
				<Button label="-"></Button>
			</div>
			<div>
				<Button label="0"></Button>
				<Button label="."></Button>
				<Button label="="></Button>
				<Button label="+"></Button>
			</div>
		</div>
    );
  }
}