import * as React from 'react';
import { Link } from 'react-router-dom';
import { Input, InputType, Content, ContentType } from './Input';
import * as EmailValidator from 'email-validator';


interface SignupInput {
    displayName: Content;
    email: Content;
    password: Content;
    passwordConfirm: Content;
}

interface SignupState {
    signupInput: SignupInput;
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
            signupInput: {
                displayName: {
                    value: '',
                    error: ''
                },
                email: {
                    value: '',
                    error: ''
                },
                password: {
                    value: '',
                    error: ''
                },
                passwordConfirm: {
                    value: '',
                    error: ''
                }
            }
        }

        this.inputHandler = this.inputHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)

    }

    inputHandler(inputData: any) {

        const key = Object.keys(inputData)[0]
        const value = inputData[key]

        this.setState((prevState: any) => {
            return prevState.signupInput[key].value = value
        })

    }

    submitHandler() {

        const signupInput : any = this.state.signupInput;
        
        const passed = (Object.keys(signupInput).map((key: any) : any => {

            this.setState((prevState : any) => {
                prevState.signupInput[key].error = '';
                return prevState;
            })
            
            const errorHandler = (key: string, error: string) => {
                this.setState((prevState: any) => {
                    prevState.signupInput[key].error = error;
                    return prevState;
                })
            }

            const value : string = (signupInput[key].value).trim()

            if(!value.length) {
                errorHandler(key, 'Must not be empty!');
                return false
            }
            
            switch(key){

                case FieldOption.DisplayName:
                    
                return true
                

                case FieldOption.Email:

                    if(!EmailValidator.validate(value)){
                        errorHandler(key, 'Not a valid email address!');
                        return false;
                    }
                return true
                    
                        
                case FieldOption.Password:
                    
                
                return true
                    

                case FieldOption.PasswordConfirm:
                    if(value !== this.state.signupInput.password.value) {

                        errorHandler(FieldOption.Password, 'Passwords do not match!')

                        this.setState((prevState) => {
                            prevState.signupInput.password.value = ''
                            prevState.signupInput.passwordConfirm.value = ''
                            return prevState
                        })

                        return false
                    }
                    
                return true
                    

            }

        }))
        .every((i: any ) : any => {
            return i
        })


        
        if(passed) {
            
            console.log('success')
            const { displayName, email, password } = this.state.signupInput

            const reqBody = {
                query: `
                    mutation {
                        createUser(userInput: {name:"${displayName.value}", email:"${email.value}" password:"${password.value}"}) {
                            _id,
                            name,
                            email
                        }
                    }
                `
            }

            fetch('http://localhost:1337/api', {
                method: 'POST',
                body: JSON.stringify(reqBody),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        
        } else {
            throw new Error()
        }
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
                    content={this.state.signupInput.displayName}
                />

                <Input
                    title={'Email'}
                    field={FieldOption.Email} 
                    inputType={InputType.text}
                    inputHandler={this.inputHandler}
                    content={this.state.signupInput.email}
                />

                <Input
                    title={'Password'}
                    field={FieldOption.Password}
                    inputType={InputType.password}
                    inputHandler={this.inputHandler}
                    content={this.state.signupInput.password}
                />

                <Input
                    title={'Confirm Password'}
                    field={FieldOption.PasswordConfirm}
                    inputType={InputType.password}
                    inputHandler={this.inputHandler}
                    content={this.state.signupInput.passwordConfirm}
                />

                <button onClick={() => this.submitHandler()}>Sign Up</button>
                
                <Link to={'/login'}>Already have an account?</Link>

            </div>
        )
    }
}

export default Signup