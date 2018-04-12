import React, { Component } from 'react';
//import logo from 'E:\\Work\\Projects\\ReactWithZeroConfiguration\\ReactWithZeroConfiguration\\react30days\\src\\logo.svg';
import imagesaqua from './images/products/images-aqua.png';
import daniel from './images/avatars/daniel.jpg'

export default class Product extends React.Component {
  render() {
    console.log("Product.js -> props");
    console.log(this.props);
    return (
      <div className='item'>
         <div className='image'>
           //<img src={this.props.ProductImagUrl} alt='Logo not found' width='100' height='100'/>
           <img src={this.props.ProductImagUrl} alt='Logo not found' width='100' height='100'/>

         </div>
         <div className='middle aligned content'>
            <div className='description'>
                <a href={this.props.url}> {this.props.title}</a>
                <p> {this.props.description} </p>
            </div>
            <div className='extra'>
                <span>Submitted by :</span>
                <img className='ui avatar image' src={this.props.ProductImagUrl} width='50' height='50' alt='Not found'/>
            </div>
         </div>
      </div>
    );
  }
}
