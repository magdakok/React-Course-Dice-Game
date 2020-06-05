import React, {Component} from 'react';
import './Die.css';

class Die extends Component {
    render(){
        
        let face = 'Die fas fa-dice-' + this.props.val;

        return (
            <div>
                <i className={face + ((this.props.isRolling ? ' animated' : ''))} ></i>

            </div>
        )
    }
}

export default Die;