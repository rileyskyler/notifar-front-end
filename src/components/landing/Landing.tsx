import * as React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Navbar from './Navbar'

class Landing extends React.Component {

    render() {

        return (
            <div>
                
                <Navbar />

                <Switch>
                    <Route path={'/sign_in'} component={Login} />
                    <Route path={'/sign_up'} component={Signup} />
                </Switch>

                <h1>Notifar</h1>

                
            </div>
        )
    }
}

export default Landing