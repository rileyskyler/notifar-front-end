import * as React from 'react'

export enum InputType {
    text = 'text',
    password = 'password'
}

interface InputProps {
    name: string
    inputType: InputType
}

export class Input extends React.Component<InputProps,{}>{
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <input type={this.props.inputType}></input>
            </div>
        )
    }
}

