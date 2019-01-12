import * as React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Landing from './components/landing/Landing'
import Dashboard from './components/dashboard/Dashboard'

export interface AppProps {

}

export class App extends React.Component<AppProps, {}> {
    render() : any {
        return (
            <Switch>
                <Route path='/:option?' component={Landing} exact/>
                <Route path='/dashboard' component={Dashboard}/>
            </Switch>
        )
    }
}