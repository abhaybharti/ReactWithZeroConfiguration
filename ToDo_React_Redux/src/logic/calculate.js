export default function calculate(value) {
	console.log("calculate function - "+value);
	console.log("calculate function - "+JSON.stringify(value));
	console.log("question from condole"+value["question"]);
	
	if (value === 'AC') {
    return {
      question: '',
      answer: ''
    };
  }
}

