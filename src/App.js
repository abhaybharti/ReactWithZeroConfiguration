import React, { Component } from 'react';
import './App.css';


const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

//const url = '${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}';
var url = PATH_BASE + PATH_SEARCH + '?' + PARAM_SEARCH + DEFAULT_QUERY;
console.log("url - "+url);

/*
const list = [
	{
		title: 'React',
		url: 'https://facebook.github.io/react/',
		author: 'Jordan Walke',
		num_comments: 3,
		points: 4,
		objectID: 0,
	},
	{
		title: 'Redux',
		url: 'https://github.com/reactjs/redux',
		author: 'Dan Abramov, Andrew Clark',
		num_comments: 2,
		points: 5,
		objectID: 1,
	},
];
*/
const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

export default class App extends Component 
{
  constructor(props){
	  super(props);
	  
	  this.state = {
		result: null,
		searchTerm: DEFAULT_QUERY,
	  };
	  
		this.setSearchTopStories = this.setSearchTopStories.bind(this);
		this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.onDismiss = this.onDismiss.bind(this);
  }
  
	onSearchSubmit(){
		const { searchTerm } = this.state;
		this.fetchSearchTopStories(searchTerm);
	}
  
    onSearchChange(event){
		this.setState({searchTerm: event.target.value});
	}
	
	onDismiss(id){
	  const isNotId = item => item.objectID !== id;
	  //const updatedHits = this.state.result.hits.filter(isNotId);
	  //this.setState({list : updatedHits});
	  const updatedHits = this.state.result.hits.filter(isNotId);
	  this.setState({
		  result: Object.assign({}, this.state.result, {hits: updatedHits})
	  });
	}
  
	setSearchTopStories(result) {
		this.setState({ result });
	}	
	
	fetchSearchTopStories(searchTerm) {
		console.log("JSON Endpoint - " +JSON.stringify({url}));
		//fetch(PATH_BASE + PATH_SEARCH + '?' + PARAM_SEARCH + DEFAULT_QUERY)
		fetch('https://hn.algolia.com/api/v1/search?query=redux')
		.then(response => response.json())
		.then(result => this.setSearchTopStories(result))
		.catch(e => e);
	}
	
	componentDidMount() {
		const { searchTerm } = this.state;
		this.fetchSearchTopStories(searchTerm);
	}

  render() 
  {
	  const { searchTerm, result } = this.state;
	   return (
			<div className="page">
			  <div className="interactions">
				<Search
					value = {searchTerm}
					onChange = {this.onSearchChange}
					onsubmit = {this.onSearchSubmit}
					const Search =({
						value,
						onChange,
						onSubmit,
						children
					})=>
					<form onSubmit ={onsubmit}>
						<input 
						  type = "text"
						  value={value}
						  onChange={onChange}
						 />
						 <button type="submit">
							{children}
						</button>
					</form>
				/>
				</div>
				{ result 
					? <Table 
					  list ={result.hits}
					  pattern={searchTerm}
					  onDismiss={this.onDismiss}
					 />
					:null
				}
			</div>
		);
  }
}

// Component using class
/*
class Search extends Component
{
	render(){
		const { value, onChange, children } = this.props;
		return(
			<form>
			{children} <input 
				type="text" 
				value={value}
				onChange={onChange}
			/>
			</form>
		);
	}
}
*/

class Table extends Component
{
	render(){
		const{ list, pattern, onDismiss }= this.props;
		return(
			<div className="table">
				{list.filter(isSearched(pattern)).map(item=>
					<div key={item.objectID} className="table-row">
						<span style={largeColumn}>
							<a href={item.url}>{item.title}</a>
						</span>
						<span style={midColumn}>{item.author}</span>
						<span style={smallColumn}>{item.num_comments}</span>
						<span style={smallColumn}>{item.points}</span>
						<span style={smallColumn}>
							<Button
								onclick={()=> onDismiss(item.objectID)}
								className="button-inline">
								Dismiss
							</Button>
						</span>
					</div>
				)}
				</div>
			);
	}
}

class Button extends Component
{
	render(){
		const {
			onClick,
			className='',
			children,
		} = this.props;
		
		return(
			<button
				onClick={onClick}
				className={className}
				type="button"
			>
			{children}
			</button>
		);
	}
}

//Functional Stateless Components using ES 6 method
const Search =({value, onChange, children}) =>{
	return(
	<form>
		{children} <input
			type="text"
			value ={value}
			onChange={onChange}
		/>
	</form>
	)
}


const largeColumn = {
	width: '40%',
};

const midColumn = {
	width: '30%',
};

const smallColumn = {
	width: '10%',
};