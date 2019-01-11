import * as React from 'react'
import { Link, Route } from 'react-router-dom'

class Login extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Close</Link>
                <p>Email</p>
                <input></input>
                <p>Password</p>
                <input type="password"></input>
                <button>Submit</button>
            </div>
        )
    }
}

export default Login