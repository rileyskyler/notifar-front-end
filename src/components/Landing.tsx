import * as React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Login from './auth/Login'
import Signup from './auth/Signup'

class Landing extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/signup'}>Signup</Link></li>
                    </ul>
                </div>

                <Switch>
                    <Route path={'/login'} component={Login} />
                    <Route path={'/signup'} component={Signup} />
                </Switch>   
                
            </div>
        )
    }
}

export default Landing