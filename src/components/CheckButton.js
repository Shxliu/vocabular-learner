import React, { Component } from 'react';
import '../App.css';

class CheckButton extends Component {
    constructor (props){
        super(props);
     
        
    }
    
    render(){

        if(this.props.item==this.props.listLength){
            this.props.lastWordCheck()}

        return(
            <div>
            <button className="checkbutton" onClick={()=>this.props.nextFunc(-1)} disabled={this.props.item<=0}>Previous</button>  
            <button className="checkbutton"  onClick ={this.props.addKnownWordFunc}> you know </button>
            <button className="checkbutton"  onClick={this.props.addUnknownWordFunc}> don't know</button>
            <button className="checkbutton" onClick={()=>this.props.nextFunc(1)} disabled={this.props.item+1>=this.props.listLength}>Next</button>
            
            </div>
        );
    }


}

export default CheckButton;