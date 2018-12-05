import React, { Component } from 'react';
import CheckButton from './CheckButton';


class WordDisplay extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div >
        <h1 >{this.props.word}</h1> 
        </div>
        }
    }


export default WordDisplay;