import * as React from 'react'

export enum InputType {
    text = 'text',
    password = 'password'
}

interface InputProps {
    title : string;
    field : any;
    inputType : InputType;
    inputHandler: Function;
    content: Content
}

export interface Content {
    value?: string;
    error?: string;
}

export enum ContentType {
    Value = 'value',
    Error = 'error'
}

export class Input extends React.Component<InputProps,{}>{
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <input
                    type={this.props.inputType}
                    value={this.props.content.value}
                    onChange={(e) => this.props.inputHandler({[this.props.field]:e.target.value})}
                    style={{border: `1px solid ${this.props.content.error?'red':'black'}`}}
                >
                </input>
                <p style={{'color': 'red', fontSize: '8px'}}>{this.props.content.error?`${this.props.title} ${this.props.content.error}`:null}</p>
            </div>
        )
    }
}

