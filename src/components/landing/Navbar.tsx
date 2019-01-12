import * as React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './auth/Login'
import Signup from './auth/Signup'

class Landing extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li>
                            <NavLink to={'/sign_in'}>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/sign_up'}>Sign Up</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Landing