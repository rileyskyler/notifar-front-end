import * as React from 'react';
import { Route, Switch } from 'react-router-dom'

import Landing from './components/landing/Landing'
import Dashboard from './components/dashboard/Dashboard'

export interface AppProps {

}

console.log('we')

export class App extends React.Component<AppProps, {}> {
    render() : any {
        return (
            <Switch>
                <Route path='/dashboard' component={Dashboard} exact/>
                <Route path='/:option?' component={Landing} exact/>
            </Switch>
        )
    }
}