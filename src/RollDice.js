import React, {Component} from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    constructor(props){
        super(props);
        this.buttonHandler = this.buttonHandler.bind(this);
        this.getRandom = this.getRandom.bind(this);
        this.state = {
            die1 : this.getRandom(),
            die2 : this.getRandom()
        }
    }

    getRandom() {
        const diceNums = ['one', 'two', 'three', 'four', 'five','six'];
        const i = Math.floor(Math.random() * 6);
        return diceNums[i];
    }

    buttonHandler() {
        this.setState({
            die1 : this.getRandom(),
            die2 : this.getRandom()
        });
    }

    render(){
        return (
            <div>
                <Die val={this.state.die1}/>
                <Die val={this.state.die2}/>
                <button onClick={this.buttonHandler}>Roll the dices!</button>
            </div>
        )
    }
}

export default RollDice;