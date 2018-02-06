import React  from 'react';
import PropTypes from 'prop-types';
import ScreenRow from './screenRow';

//Create our Screen component as a functional component
//it would display two screen rows, 1 for questions and the other for the answer
//The value would be passed down from it's parent component as a prop

const Screen =(props) => {
	return (
		<div className="screen">
			<ScreenRow value={props.question}/>
			<ScreenRow value={props.answer}/>
		</div>
	);
}	

//Define our props expected from the parent component
Screen.propTypes={
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired
}

//export our component
export default Screen;