import { Component } from "react";
import Keyboard from "./Keyboard";

export default class Mouse extends Component{
     constructor(props){
     super(props)
     }
    render(){
        return  <div>
             <h2>{this.props.meg}</h2>
             <h3 style={{color:"red"}}>{this.props.Welc}</h3>
        </div>
      
    }
}