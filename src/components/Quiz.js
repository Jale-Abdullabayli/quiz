import React, { Component } from 'react'
import { data } from './data';
import './Quiz.css';

class quiz extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quizs: data,
            correctCount: 0,
            finish: false
        }
    }

    submitHandle = (index, i) => {
        document.querySelector(`.quiz:nth-child(${i+1}) .option:nth-child(${this.state.quizs[i].correctId})`).classList.add('correct');
        if (index == this.state.quizs[i].correctId - 1) {
            this.setState({ correctCount: this.state.correctCount + 1 });
        }
        else{
            document.querySelector(`.quiz:nth-child(${i+1}) .option:nth-child(${index+1})`).classList.add('wrong');
        }
        var elems = document.querySelectorAll(`.quiz:nth-child(${i+1}) .option`);
        var j = 0;
         var length = elems.length;
        for ( j=0; j < length; j++) {
            elems[j].style.pointerEvents = "none";
        }
        
    }
    finishHandle = () => {
        this.setState({ finish: true })
    }
    render() {
        if (this.state.finish) {
            return <h1>correct: {this.state.correctCount} --- wrong: {this.state.quizs.length - this.state.correctCount}</h1>
        }
        return (
            <div>
                {this.state.quizs.map((quiz, i) => {
                    return (
                        <div className='quiz'>
                            <h1>{quiz.quiz}</h1>
                            <div>
                                {
                                    quiz.options.map((option, index) => <button className='option' onClick={() => this.submitHandle(index, i)}>{option}</button>)
                                }
                            </div>
                            <hr></hr>
                        </div>

                    )
                })}
                <button onClick={this.finishHandle}>Finish</button>
            </div>
        )
    }
}

export default quiz