import * as React from 'react';
import { Route, Switch } from 'react-router-dom'

import Landing from './components/landing/Landing'
import Dashboard from './components/dashboard/Dashboard'

interface AppState {
    loggedIn: boolean;
    userId: string;
    token: string;
}

export class App extends React.Component<{}, AppState> {

    constructor(props: any) {
        super(props)

        this.state = {
            loggedIn: false,
            userId: '',
            token: ''
        }
        
        this.updateUserData = this.updateUserData.bind(this)
    }

    async updateUserData({userId, token}: any): Promise<any> {
        console.log(userId, token)
        this.setState({
            loggedIn: true,
            userId,
            token
        })
    }
    
    render() : any {

        const landing = () => {
            return (
                <Landing
                    updateUserData={this.updateUserData}
                />
            )
        }

        const dashboard = () => {
            return (
                <Dashboard
                    userId={this.state.userId}
                    token={this.state.token}
                />
            )
        }

        return (
            <Switch>
                <Route path='/dashboard' component={dashboard} exact/>
                <Route path='/:option?' component={landing} exact/>
            </Switch>
        )
    }
}