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
            die2 : this.getRandom(),
            isRolling: false
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
        this.setState({isRolling:true});
        setTimeout(()=> { this.setState({isRolling:false}); }, 1000);
    }

    render(){
        return (
            <div className="RollDice">
                <div className="RollDice-box">
                    <Die val={this.state.die1} isRolling={this.state.isRolling}/>
                    <Die val={this.state.die2} isRolling={this.state.isRolling}/>
                </div>
                <button onClick={this.buttonHandler} disabled={this.state.isRolling}>{this.state.isRolling ? 'Wait please' : 'Roll the dices!'}</button>
            </div>
        )
    }
}

export default RollDice;