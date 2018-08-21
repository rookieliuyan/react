import React from 'react'
import { Route } from 'react-router-dom'

import First from './components/testpage/First'
import Second from './components/testpage/Second'
import Third from './components/testpage/Third'

const Routes = () => {
    return (
        <div>
            <Route exact path = "/" component = { First }/>
            <Route exact path = "/second" component = { Second }/>
            <Route exact path = "/third" component = { Third }/>
        </div>
    )
}

export default Routes