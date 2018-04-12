import React, { Component } from 'react';
import logo from './logo.svg';
import './App_Chapter1.css';
import Product from './Product'
import Seed from './seed.js'
//import from './seed.js'

//import 'semantic-ui-css/semantic.min.css';



export default class ProductList extends React.Component {
  render() {
    const productComponents = Seed.Seed.map((product) =>(
       <Product
				 key = {'product -' +product.id}
				 id={product.id}
				 title={product.title}
				 description={product.description}
				 url={product.url}
				 votes={product.votes}
				 submitterAvatarUrl = {product.submitterAvatarUrl}
				 ProductImagUrl = {product.ProductImagUrl}
			/>
	));

    return (
      <div className='ui unstackable items'>
        {productComponents}
      </div>
    );
  }
}
