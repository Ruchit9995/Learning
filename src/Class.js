import React, { Component } from 'react';
 import style from './style.css';

export class Ruchit extends Component {
    render() {
        return (
            <div>
               <h1>{this.props.Data}</h1> 
               <Parth/>
               
            </div>
        )
    }
}



export class Parth extends Component {

    constructor() 
     {
        super();
        this.state={
             name: 'Name',
             Email: <h1 id="Mahol">Abc@gmail.com</h1>,
             count:  2
            
        }
     }
     updateState()
     {
         this.setState({
             name:  <h1 id="Lalu">Milan</h1>,
             count: this.state.count+1 ,
             Email: <h1 id="Lalu">Milan@gmail.com</h1>
             
         })
         
     }
    render() 
    {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>Email{this.state.Email}</h1>
                <h1>count{this.state.count}</h1>
                <button on onClick={()=>this.updateState()}>update Name </button>
                
            </div>
        )
    }
}










 
 

