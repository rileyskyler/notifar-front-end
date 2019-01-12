import * as React from 'react'

export enum InputType {
    text = 'text',
    password = 'password'
}

interface InputProps {
    title : string;
    inputType : InputType;
    inputHandler: Function;
    field : any;
    value : string;
}

export class Input extends React.Component<InputProps,{}>{
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <input
                    type={this.props.inputType}
                    value={this.props.value}
                    onChange={(e) => this.props.inputHandler({[this.props.field]:e.target.value})}>
                </input>
            </div>
        )
    }
}

