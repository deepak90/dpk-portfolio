import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import TagContainer from './containers/TagContainer';
import CardContainer from './containers/CardContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <TagContainer />
                <CardContainer />
            </div>
        );
    }
}

export default App;
