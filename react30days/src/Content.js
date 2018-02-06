import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class Content extends React.Component {
  render() {
	  const activity = this.props.activity;
    return (
      <div className="content">
        <div className="line"></div>

        {/* Timeline item */}
        <div className="item">
          <div className="avatar">
            <img
            alt={activity.text}
            src={activity.user.avatar} />
            {activity.user.name}
          </div>

          <span className="time">
            An hour ago
          </span>
          <p>Ate lunch</p>
          <div className="commentCount">
            2
          </div>
        </div>
      </div>
    )
  }
}
export default Content