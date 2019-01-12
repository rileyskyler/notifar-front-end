import * as React from 'react'
import { Link, Route } from 'react-router-dom'
import { Input, InputType} from './Input'

interface UserInput {
    displayName: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

interface SignupState {
    userInput: UserInput;
}

enum FieldOption {
    displayName = "displayName",
    email = "email",
    password = 'password',
    passwordConfirm = 'passwordConfirm'
}

class Signup extends React.Component <{},SignupState>{

    constructor(props: any) {
        super(props)

        this.state = {
            userInput: {
                displayName:'',
                email:'',
                password:'',
                passwordConfirm:''
            }
        }

        this.inputHandler = this.inputHandler.bind(this)
    }

    inputHandler(data: any) {

        const key = Object.keys(data)[0]
        const value = data[key]

        this.setState((prevState : any) => {
            return prevState.userInput[key] = value
        })

    }

    render() {

        return (
            <div>
                <Link to="/">Close</Link>
                
                <Input
                    name={'Display Name'}
                    field={FieldOption.displayName}
                    inputType={InputType.text}
                    inputHandler={this.inputHandler}
                />

                <Input
                    name={'Email'}
                    field={FieldOption.email}
                    inputType={InputType.text}
                    inputHandler={this.inputHandler}
                />

                <Input
                    name={'Password'}
                    field={FieldOption.password}
                    inputType={InputType.password}
                    inputHandler={this.inputHandler}
                />

                <Input
                    name={'Confirm Password'}
                    field={FieldOption.passwordConfirm}
                    inputType={InputType.password}
                    inputHandler={this.inputHandler}
                />

                <div>
                    {this.state.userInput.email}
                </div>

                <button>Submit</button>
            </div>
        )
    }
}

export default Signup