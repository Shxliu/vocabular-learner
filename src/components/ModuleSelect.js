import React, {Component} from 'react';
import Select from 'react-select';
import '../App.css';

class ModuleSelect extends Component{
    constructor(){
        super();
        this.state = {
            selectedValue: "Select a module",
        }
    }
    
    handleChange = (selectedItem) => {
        this.setState({ selectedValue: selectedItem.value });
    }

    handleSubmit= ()=>{
        this.props.handleSubmit(this.state.selectedValue);
    }

 

    render() {
        return (
        <div>
            <form className="form" onSubmit={()=>{this.handleSubmit(); this.props.wordShow(); this.props.moduleSelectedCom()}}>
            <label>
            <Select placeholder={this.state.selectedValue}   onChange={this.handleChange} options={this.props.arr} >
            </Select>
            <br/>>
            <input type="submit" value="submit" />
            </label>
            
            </form>
        </div>    
        )
    }
};

export default ModuleSelect;