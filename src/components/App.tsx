// declare module "*.jpg"
import * as React from "react";
const logo = require('./photo.jpg')


export interface AppProps {

}

export class App extends React.Component<AppProps, {}> {
    render() : any {
        return (
            <div>
                <h1>
                    TS React App
                </h1>
                    <img src={logo} alt="Test" />
            </div>
        )
    }
}