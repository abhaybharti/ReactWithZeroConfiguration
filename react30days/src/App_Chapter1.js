import React, { Component } from 'react';
import logo from './logo.svg';
import './App_Chapter1.css';
import ProductList from './ProductList';

export default class App extends Component {
  render() {
    return (
     <ProductList />
    );
  }
}

/*
-----------------
 Topic covered
 ---------------
1. We think about and organize our React apps as Component
2. Using JSX inside the render method
3. Data flows from parent to children through this.props
4. Event flows from children to parent through functions
5. Utilizing React lifecycle methods
6. Stateful Component and how state is different from this.props.
7. How to manipulate state while treating it as immutable
*/
