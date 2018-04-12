import React  from 'react'; //import react module
import ScreenRow from './components/screenRow';  // Import our screenRow component from this directory
import Screen from './components/screen'; // Import our screen component from this directory
import Button from './components/Button'; // Import our Button component from this directory
import calculate from './logic/calculate';

//create a class which extends react component
class Frame extends React.Component {
  
  constructor(){
	  super();
	  //set our default state
	  this.state = {
		  question: '',
		  answer: ''
	  }
	  
	  //Bind our handleClick method(sets 'this' explicitly to refer to this component)
	  //We did this because 'this' would refer to the source of the click events
	  this.handleClick= this.handleClick.bind(this);
	}
  
  // Render function to create component to be rendered on the DOM.
  // This method must return a single parent element as you can see here. 
  // The component is wrapped around () to make it a single expression.
  render(){
	  return (
		<div className="frame">
			<div className="calcutor-title">
				A_B Calcualtor
			</div>
			<Screen question={this.state.question} answer={this.state.answer}/>
			<div className="button-row">
				<Button label={'1'} handleClick={this.handleClick} type='input' />
				<Button label={'2'} handleClick={this.handleClick} type='input' />
				<Button label={'3'} handleClick={this.handleClick} type='input' />
				<Button label={'4'} handleClick={this.handleClick} type='input' />
				<Button label={'-'} handleClick={this.handleClick} type='input' />
				<Button label={'+'} handleClick={this.handleClick} type='input' />
			</div>
			<div className="button-row">
				<Button label={'5'} handleClick={this.handleClick} type='input' />
				<Button label={'6'} handleClick={this.handleClick} type='input' />
				<Button label={'7'} handleClick={this.handleClick} type='input' />
				<Button label={'8'} handleClick={this.handleClick} type='input' />
				<Button label={'*'} handleClick={this.handleClick} type='input' />
				<Button label={'/'} handleClick={this.handleClick} type='input' />
			</div>
			<div className="button-row">
				<Button label={'9'} handleClick={this.handleClick} type='input' />
				<Button label={'.'} handleClick={this.handleClick} type='input' />
				<Button label={'0'} handleClick={this.handleClick} type='input' />
				<Button label={'AC'} handleClick={this.handleClick} type='input' />
				<Button label={'='} handleClick={this.handleClick} type='input' />
			</div>
		</div>
	  );
  }
  
  // our method to handle all click events from our buttons
  handleClick(event) {
	  const value = event.target.value; //get the value from the target element (button)
	  this.setState(calculate(this.state, value));
	  console.log("Inside handleClick(event), value :" +value);
	  switch(value){
		case '=':{ //if it's an equal sign, use the eval module to evaluate the question
			// convert the answer (in number) to string
			const answer = eval(this.state.question).toString();
			//update answer in our state
			this.setState({answer});
			console.log("Inside handleClick(event) ->case '=', answer :" +answer);
			break;
		}
		/*
		case 'AC': {
			//if it's the AC sign, just clean our question and answer in the state
			this.setState({question:'', answer:''});
			console.log("Inside handleClick(event) ->case 'AC': ");
			break;
		}*/
		default:{
			//for every other command, update the answer in the state
			this.setState({question: this.state.question+=value});
			console.log("Inside handleClick(event) ->case 'default': " +value);
			break;
		}
	  }
  }
}

// export our frame component. To be used in our App.js file
export default Frame;