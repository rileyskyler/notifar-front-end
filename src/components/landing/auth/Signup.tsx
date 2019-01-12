import * as React from 'react'
import { Link } from 'react-router-dom'
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
    DisplayName = "displayName",
    Email = "email",
    Password = 'password',
    PasswordConfirm = 'passwordConfirm'
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
        this.submitHandler = this.submitHandler.bind(this)

    }

    inputHandler(inputData: any) {

        const key = Object.keys(inputData)[0]
        const value = inputData[key]

        this.setState((prevState: any) => {
            return prevState.userInput[key] = value
        })

    }

    submitHandler() {

        let passed : boolean = true

        const userInput : any = this.state.userInput;
        
        Object.keys(userInput).forEach((key: any) : any => {
            //no whitespace before or after
            const input : string = userInput[key].trim()

            switch(key){

                case FieldOption.DisplayName:
                    console.log(input)
                break;

                case FieldOption.Email:
                    console.log(input)
                break;

                case FieldOption.Password:
                    console.log(input)
                break;

                case FieldOption.PasswordConfirm:
                    console.log(input)
                break;


            }

        })

        console.log(passed)
    }

    render() {

        return (
            <div>
                <Link to="/">Close</Link>
                
                <Input
                    title={'Display Name'}
                    field={FieldOption.DisplayName}
                    inputType={InputType.text}
                    inputHandler={this.inputHandler}
                    value={this.state.userInput.displayName}
                />

                <Input
                    title={'Email'}
                    field={FieldOption.Email}
                    inputType={InputType.text}
                    inputHandler={this.inputHandler}
                    value={this.state.userInput.email}
                />

                <Input
                    title={'Password'}
                    field={FieldOption.Password}
                    inputType={InputType.password}
                    inputHandler={this.inputHandler}
                    value={this.state.userInput.password}
                />

                <Input
                    title={'Confirm Password'}
                    field={FieldOption.PasswordConfirm}
                    inputType={InputType.password}
                    inputHandler={this.inputHandler}
                    value={this.state.userInput.passwordConfirm}
                />

                <button onClick={() => this.submitHandler()}>Sign Up</button>
                
                <Link to={'/login'}>Already have an account?</Link>

            </div>
        )
    }
}

export default Signup