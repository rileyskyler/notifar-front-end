import * as React from 'react'
import GoogleApiWrapper from './Map'

interface DashboardProps {
    userId: string;
    token: string;
}

class Dashboard extends React.Component <DashboardProps,{}>{

    async componentDidMount() : Promise<void> {
     
        const reqBody = {
            query: `
            query{user{ _id, name, email,devices{ _id, tel, locations{longitude, latitude}}}}
            `
        }
        let res;
        try {
    
            res = await fetch('http://localhost:1337/api', {
                method: 'POST',
                body: JSON.stringify(reqBody),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${this.props.token}`
                }
            })
    
        }
        catch (err) {
            throw err
        }

        console.log(await res.json())

    }

    render() {

        return (
            <div>

                <h3>
                    {this.props.token}
                    {this.props.userId}
                </h3>
                <GoogleApiWrapper/>
          
            </div>
        )
    }
}

export default Dashboard

