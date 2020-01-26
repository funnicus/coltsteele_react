import React, {Component} from 'react';
import Coin from './Coin';

class CoinFlip extends Component {
    constructor(props){
        super(props);
        this.state = {faceHead: null, heads: 0, tails: 0, flips: 0};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        //First we are making a copy object of the state (curState) for changing the state.
        //Changing the original state object directly is a bad idea.
        let curState = {...this.state} //Copying state to curState using spread operator (...)
        //picking a random number between 0 and 1
        //face of the coin is determined by numbers 0 and 1
        curState.faceHead = Math.floor(Math.random()*2);
        //checking if heads or tails and adding to the correct counter
        if(curState.faceHead === 0){
            curState.heads++;
        }
        else {
            curState.tails++;
        }
        curState.flips++; //adding one flip
        //Assigning the new values to the original state using setState and curState
        this.setState({
            faceHead: curState.faceHead, 
            heads: curState.heads,
            tails: curState.tails,
            flips: curState.flips
        });
        console.log("Changing state...");
        console.log(curState);
    }
    render() {
        return(
            <div className="CoinFlip">
                <h2>Let's flip a coin!</h2>
                {this.state.faceHead !== null && <Coin face={this.state.faceHead}/>}
                <button onClick={this.handleClick}>Flip a coin!</button>
                <p>Out of {this.state.flips} flips, there has been {this.state.heads} heads and {this.state.tails} tails.</p>
            </div>
        )
    }
}

export default CoinFlip;