import React, { Component } from 'react';
import './index.css';
import Header from './components/header/index'
import Promo from './components/promo/index'
import Events from './components/events/index'

class App extends Component {
    render () {
        return (
            <div className="App">
                <Header/>
                <Promo/>
                <Events/>
            </div>
        );
    }
}

export default App;