import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from './routes';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <ul>
                        <li><Link to="/">page1</Link></li>
                        <li><Link to="/second">page2</Link></li>
                        <li><Link to="/third">page3</Link></li>
                    </ul>
                    {Routes()}
                </div>  
            </Router>
        )
    }
}

export default App;
