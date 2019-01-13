import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Input, InputType, Content, ContentType } from './Input';
import * as EmailValidator from 'email-validator';


interface LoginInput {
    email: Content;
    password: Content;
}

interface LoginState {
    loginInput: LoginInput;
}

enum FieldOption {
    Email = "email",
    Password = 'password',
}

class Login extends React.Component <{},LoginState>{

    constructor(props: any) {
        super(props)

        this.state = {
            loginInput: {
                email: {
                    value: '',
                    error: ''
                },
                password: {
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
            return prevState.loginInput[key].value = value
        })

    }

    async submitHandler() {

        const loginInput : any = this.state.loginInput;
        
        const passed = (Object.keys(loginInput).map((key: any) : any => {

            this.setState((prevState : any) => {
                prevState.loginInput[key].error = '';
                return prevState;
            })
            
            const errorHandler = (key: string, error: string) => {
                this.setState((prevState: any) => {
                    prevState.loginInput[key].error = error;
                    return prevState;
                })
            }

            const value : string = (loginInput[key].value).trim()

            if(!value.length) {
                errorHandler(key, 'must not be empty!');
                return false
            }
            
            switch(key){
                
                case FieldOption.Email:

                    if(!EmailValidator.validate(value)){
                        errorHandler(key, 'address not valid!');
                        return false;
                    }
                return true
                    
                        
                case FieldOption.Password:
                    //Password checks
                return true
                    
            }

        }))
        .every(i => {return i})

        console.log(passed)
        
        if(passed) {
            
            console.log('success')
            const { email, password } = this.state.loginInput

            const reqBody = {
                query: `
                    query { login(loginInput: {email:"${email.value}", password: "${password.value}"})
                        {
                            token
                        }
                    }
                `
            }

            let res;
            try {

                res = await fetch('http://localhost:1337/api', {
                    method: 'POST',
                    body: JSON.stringify(reqBody),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            }
            catch (err) {
                throw err
            }

            if(res.status === 200) {
                (this.props as any).history.push('/dashboard')
            }
            

        }
    }

    render() {

        return (
            <div>
                <Link to="/">Close</Link>

                <Input
                    title={'Email'}
                    field={FieldOption.Email} 
                    inputType={InputType.text}
                    inputHandler={this.inputHandler}
                    content={this.state.loginInput.email}
                />

                <Input
                    title={'Password'}
                    field={FieldOption.Password}
                    inputType={InputType.password}
                    inputHandler={this.inputHandler}
                    content={this.state.loginInput.password}
                />

                <button onClick={() => this.submitHandler()}>Sign Up</button>
                
                <Link to={'/sign_up'}>Don't have an account?</Link>

            </div>
        )
    }
}

export default Login