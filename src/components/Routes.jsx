import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Employees from '../pages/Employees'
import Products from '../pages/Products'
import Settings from '../pages/Settings'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/empleados' component={Employees}/>
            <Route path='/productos' component={Products}/>
            <Route path='/configuracion' component={Settings}/>
        </Switch>
    )
}

export default Routes
