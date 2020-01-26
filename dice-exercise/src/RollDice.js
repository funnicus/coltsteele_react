import React, {Component} from 'react';
import Die from './Die';
import './RollDice.css'

class RollDice extends Component {
    constructor(props){
        super(props);
        this.state = { die1: 1, die2: 2, rolling: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        //pick two new rolls
        let numChange1 = Math.floor(Math.random()*6+1);

        let numChange2 = Math.floor(Math.random()*6+1);
        //set state with new rolls
        this.setState({ die1: numChange1, die2: numChange2, rolling: true });

        //wait one second, then set rolling to false
        setTimeout(() => {
            this.setState({rolling: false})
        }, 1000);

        console.log("Changing state...")
        console.log(this.state.die1)
        console.log(this.state.die2)
    }

    render() {
        return(
            <div className="RollDice">
                <h1>Roll two dices</h1>
                <div className="Dices">
                    <Die dice={this.state.die1} rolling={this.state.rolling} />
                    <Die dice={this.state.die2} rolling={this.state.rolling} />
                </div>
                <button onClick={this.handleClick} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Roll dice'}
                </button>
            </div>
        );
    }
}

export default RollDice;