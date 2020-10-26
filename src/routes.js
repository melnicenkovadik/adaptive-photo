import React from 'react'
import {Switch, Route} from 'react-router'

import ImageChild from './components/ImageGrid/Image'
import ImageGrid from "./components/ImageGrid/ImageGrid";

export default (

    <Switch>
        <Route path='/' component={ImageGrid} exact />
        <Route path='/images/:id' component={ImageChild} />
    </Switch>
)
