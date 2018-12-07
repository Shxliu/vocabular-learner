import React , {Component} from 'react';
import '../App.css';

class ResultDisplay extends Component {
    resultShow = (score) => {
        switch (score) {
            case score >= 90:
                return "Exellent";
            case score >= 60 && score < 90:
                return "Good Work";
            default:
                return "Work Harder";
            }
    }

    render(){
        let array=[];
        for(let i=0; i<this.props.unknownWordsList.length;i++){
            array.push(<div key={i}>{this.props.unknownWordsList[i]}</div>)
        }

        return <div>
                <p> Your score is {this.props.score.toFixed(2)} %</p>
                 <p>{this.resultShow(this.props.score)}</p>
                <p> The words you don't know are </p>
                <div className="array1">{array}</div>
            </div>
        
    }

}



export default ResultDisplay;