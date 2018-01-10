import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

export default class App extends Component 
{
  constructor(props){
	  super(props);
	  
	  this.state ={
		  list,
		  searchTerm: '',
	  };
	  
	  this.onDismiss = this.onDismiss.bind(this);
	  
	  this.doSomething = this.doSomething.bind(this);
	  this.doSomethingElse = this.doSomethingElse.bind(this);
	  
	  this.onSearchChange = this.onSearchChange.bind(this);
	  this.onDismiss = this.onDismiss.bind(this);
  }
  
    onSearchChange(event){
		this.setState({searchTerm: event.target.value});
	}
	
	doSomething() {
	// do something
	}
	
	doSomethingElse() {
	// do something else
	}

  onClickMe(){
	  console.log(this);
  }
  
  onDismiss(id){
	  const isNotId = item => item.objectID !== id;
	  const updatedList = this.state.list.filter(isNotId);
	  this.setState({list : updatedList});
  }
  
  render() 
  {
	  const { searchTerm, list } = this.state;
		return (
		
			<div className="App">
				<form>
					<input type="text" value = {searchTerm} onChange={this.onSearchChange}/>
				</form>
		     	{this.state.list.filter(isSearched(this.state.searchTerm)).map(item => 
					<div key={item.objectID}>
						<span>
							<a href={item.url}>{item.title}1</a>
						</span>
						<span>{item.author}</span>
						<span>{item.num_comments}</span>
						<span>{item.points}</span>
						<span>
							<button
								onClick={() => this.onDismiss(item.objectID)}
								type="button"
							>
								Dismiss
							</button>
						</span>
						<span>
							<button onClick={this.onClickMe.bind(this)}
							type="button"
							> Click Me
							</button>
						</span>
					</div>
				)}
			</div>
		);
  }
}

class Search extends Component
{
	render(){
		const { value, onChange } = this.props;
		return(
			<form>
				<input type="text" onChange={onChange}/>
			</form>
		);
	}
}

class Table extends Component
{
	render(){
		const{ list, pattern, onDismiss }= this.props;
		return(
			<div>
				{list.filter(isSearched(pattern)).map(item=>
					<div key={item.objectID}>
						<span>
							<a href={item.url}>{item.title}</a>
						</span>
						<span>{item.author}</span>
						<span>{item.num_comments}</span>
						<span>{item.points}</span>
						<span>
							<button
								onclick={()=> onDismiss(item.objectID)}
								type="button"
							>Dismiss
							</button>
						</span>
					</div>
				)}
				</div>
			);
	}
}