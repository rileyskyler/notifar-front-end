import * as React from 'react'

export enum InputType {
    text = 'text',
    password = 'password'
}

interface InputProps {
    name: string
    inputType: InputType
    inputHandler: Function
    field: any
}

export class Input extends React.Component<InputProps,{}>{
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <input type={this.props.inputType} onChange={(e) => this.props.inputHandler({[this.props.field]:e.target.value})}></input>
            </div>
        )
    }
}

