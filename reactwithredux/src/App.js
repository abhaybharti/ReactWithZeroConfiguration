import React, { Component } from 'react';
import StuffList from './component/suffList';
import Chatroom from './component/Chatroom';

class App extends Component {
    render() {
        return (
            <div className="app">
                <StuffList />
				<Chatroom />
            </div>
        );
    }
}

export default App;