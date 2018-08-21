import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from 'react-redux'
import Routes from './routes';
class App extends Component {

    liClicked = () => {
        this.props.addNum()
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <ul>
                        <li onClick={this.liClicked}><Link to="/">page1</Link></li>
                        <li><Link to="/second">page2</Link></li>
                        <li><Link to="/third">page3</Link></li>
                        <li>{this.props.count}</li>
                    </ul>
                    {Routes()}
                </div>  
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.test
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNum: () => dispatch({type: 'TEST_ADD', number: 1})
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(App)

