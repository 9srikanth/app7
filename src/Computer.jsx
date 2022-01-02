import React, { Component } from 'react'
export default class Computer extends Component{
    constructor(){
    super()
        this.state = {
            message:"Hi Hello how are you"
        }
    }
    render(){
        return(
            <div>
                <button onClick={()=>{{this.setState({message:"Hello iam changed"})}}}> Change</button>
            <h1>Own Practise React class app</h1>
            <h1>{this.state.message}</h1>
            </div>
         
        )
    }
}