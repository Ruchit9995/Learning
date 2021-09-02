import React, { Component } from 'react'

export class Listing extends Component {
    constructor()
    {
        super();
        this.state={
            users:null
        }
    }
    componentDidMount()
    {
        fetch('https://reqres.in/api/users').then((resp)=>{
            resp.json().then((result) => {
                // console.warn(result)
                this.setState({users:result.data})
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.users ?
                    this.state.users.map((item,i)=>
                    <div><p>{i}---{item.first_name}  {item.last_name}</p></div>
                    )
                    :
                    null
                }
            </div>
        )
    }
}

export default Listing
