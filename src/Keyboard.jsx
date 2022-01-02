import React, { Component }  from "react";
import Mouse from "./Mouse";
export default class Keyboard extends Component{
    constructor(){
        super()
        this.state = {
            message:"hi how are you my boy",
            Welcomemsg:"Hi Welcome msg"
        }
    }
    render(){
        return(
            <div>
                <h3>Hi iam Parent Component</h3>
                {
                   <Mouse 
                      meg = {this.state.message}  
                      Welc ={this.state.Welcomemsg}/>
                } 

            </div>
        )
    }
}