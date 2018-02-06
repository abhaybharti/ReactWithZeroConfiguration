import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
	    <div className="menuIcon">
          <div className="dashTop"></div>
          <div className="dashBottom"></div>
          <div className="circle"></div>
        </div>
        <div className="fa fa-more"></div>

        <span className="title">
		{this.props.title}</span>

        <input
          type="text"
          className="searchInput"
          placeholder="Search ..." />

        <div className="fa fa-search searchIcon"></div>
      </div>
    )
  }
}
export default Header