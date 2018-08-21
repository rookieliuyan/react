import React, { Component } from 'react';

class Third extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liData: ['a', 'b', 'c', 'd']
        }
    }
    render() {
        return (
            <div>
                { this.state.liData.map((item) => <li key = { item }>{ item }</li>) }
            </div>
        )
    }
}

export default Third