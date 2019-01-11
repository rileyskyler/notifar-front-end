import * as React from 'react'
import { Link, Route } from 'react-router-dom'
import { Input, InputType} from './Input'


interface SignupState {
    userInput: any
}

class Signup extends React.Component <{},SignupState>{

    constructor(props: any) {
        super(props)

        this.state = {
            userInput: null
        }
    }

    render() {
        return (
            <div>
                <Link to="/">Close</Link>
                
                <Input
                    name={'Email'}
                    inputType={InputType.text}
                />

                <Input
                    name={'Password'}
                    inputType={InputType.password}
                />



                <button>Submit</button>
            </div>
        )
    }
}

export default Signup