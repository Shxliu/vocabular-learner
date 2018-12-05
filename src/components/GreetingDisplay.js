import React, { Component } from 'react';
 

class GreetingDisplay extends Component {
    render(){

    return(
    <div>
    <p> Welcome to the word Test</p>
    <button onClick={this.props.moduleSelectedCom}> start  </button>
    </div>
    );
    }
}

export default GreetingDisplay