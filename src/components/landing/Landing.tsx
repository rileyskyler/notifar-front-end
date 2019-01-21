import * as React from 'react'
import { Link, Switch, Route, withRouter } from 'react-router-dom'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Navbar from './Navbar'

interface LandingProps {
    updateUserData: Function

}

class Landing extends React.Component <LandingProps,{}> {

    constructor(props: any) {
        super(props)

        this.state = {

        }

    }

    render() : any {
        
        const login = () =>  {
            return (
                <Login
                    updateUserData={this.props.updateUserData}
                />
            )
        }
    
        const signup = () => {
            return (
                <Signup/>
            )
        }

        return (
            <div>
                
                <Navbar />

                <Switch>
                    <Route path={'/sign_in'} component={login} />
                    <Route path={'/sign_up'} component={signup} />
                </Switch>

                <h1>Notifar</h1>
                
            </div>
        )
    }
}

export default Landing