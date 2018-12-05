import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import WordDisplay from './components/WordDisplay';
import CheckButton from './components/CheckButton';
import ResultDisplay from './components/ResultDisplay';
import GreetingDisplay from './components/GreetingDisplay';
import ModuleSelect from './components/ModuleSelect';

var moduleList = [
  {
    moduleName: "module 1",
    wordList: ["dog", "cat", "chicken"],
  },
  {
    moduleName: "module 2",
    wordList: ["car","truck","suv"],
  },
  {
    moduleName: "module 3",
    wordList: ["tree","grass","bush"],
  }
]

class App extends Component {
  constructor(props){
    super(props);
    this.optionArray= [
      {
        value:'Module 1', 
        label:'Module 1'
      },

      {
      value:'Module 2', 
      label:'Module 2'
      },

      
      {
      value:'Module 3',
       label:'Module 3'
      }
    ];

    this.state = {
      listToTest: {},
      knowWords:[],
      unknownWords:[],
      item:0,
      score:0,
      showResult:false,
      showWord:false,
      moduleSelected:false,
      ListToTestEmpty:false,
      lastWord:false,
      selectedModule:'module 1',
     
    }
  }

handleSubmit=(selectedValue)=>{
  this.setState({selectedModule: selectedValue});
  this.updateWordList();
}


updateWordList = ()=>{
  let y = moduleList.filter(x=>x.moduleName===this.state.selectedModule)[0];
  this.setState({listToTest: y.wordList});
}

  addKnownWord = ()=>{
    let word = this.state.listToTest[this.state.item];
    delete this.state.listToTest[this.state.item];
    this.state.knowWords.push(word);
    let newKnownwords = this.state.knowWords;
    let newState = {
      knowWords: newKnownwords,
      item:this.state.item+1,
    };
    this.setState(newState);
  }

  addUnknownWord= ()=>{
    let word = this.state.listToTest[this.state.item];
    delete this.state.listToTest[this.state.item];
    this.state.unknownWords.push(word);
    let newUnKnownwords = this.state.unknownWords;
    let newState = {
      unknownWords: newUnKnownwords,
      item:this.state.item+1,
    };
    this.setState(newState);
  }

  next = (i)=>{
    let newState = {
      item:  this.state.item+i
    };
    this.setState(newState);
  }

  removeDuplicateUsingSet(arr){
    let unique_array=Array.from(new Set(arr))
    return unique_array
  }
 
  scoreCalculator(arr){
    {this.removeDuplicateUsingSet(this.state.unknownWords)};
    let newScore=(1-arr.length/this.state.listToTest.length)*100;
    return newScore;
  }

  showResultFunc=()=>{
    let newScore = this.scoreCalculator(this.state.unknownWords);
    this.setState({
      score: newScore,
      showResult: true,
      showWord:false,
    });
  }

  showWordFunc=()=>{
    let showWordnew= !this.state.showWord;

    this.setState({
      showWord: showWordnew,
    })
  }

  moduleSelectedFunc=()=>{
    let moduleSelectedNew=!this.state.moduleSelected;
    this.setState({
      moduleSelected:moduleSelectedNew,
    })
  }

  lastWordFunc=()=>{
    this.setState({
      lastWord:true,
    })
  }

  Empty=(arr)=>{
    if (this.state.item===this.state.listToTest.length){
  this.setState({
    ListToTestEmpty:true,
  })
    }
    return
  }

  render() {

    return (
      <div className="App">
 
        <header className="App-header">     
          {!this.state.showWord && !this.state.showResult && !this.state.moduleSelected? <GreetingDisplay moduleSelectedCom={this.moduleSelectedFunc}/>:null}
          {this.state.moduleSelected?
             <ModuleSelect 
                handleSubmit={ this.handleSubmit} arr={this.optionArray} wordShow={this.showWordFunc} moduleSelectedCom={this.moduleSelectedFunc} /> 
                : null}
          {this.state.showWord? <WordDisplay word={this.state.listToTest[this.state.item]}/>:null}  
          {this.state.showWord && !this.state.lastWord? <CheckButton previousFunc ={this.previous}  item ={this.state.item} listLength={this.state.listToTest.length} addKnownWordFunc={this.addKnownWord} addUnknownWordFunc={this.addUnknownWord} nextFunc={this.next} lastWordCheck={this.lastWordFunc}/>:null}
          {this.state.showWord? <button className="button2" disabled={this.state.item<this.state.listToTest.length-1} onClick={this.showResultFunc}>Show Result</button>:null}
          {this.state.showResult? <ResultDisplay score={this.state.score} unknownWordsList= {this.state.unknownWords}/>:null} 

          
        </header>
      </div>
    );
  }
}

export default App;
