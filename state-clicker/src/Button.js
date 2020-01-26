import React, {Component} from 'react';
import Number from './Number';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 0};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        let numChange = Math.floor(Math.random()*10)+1;
        this.setState({ num: numChange})
        console.log(this.state.num);
    }
    render() {
        if(this.state.num !== 7){
            return(
                <div className="Button">
                    <Number numero={this.state.num}/>
                    <button onClick={this.handleClick}>Random number</button>  
                </div>
            )
        }
        else{
            return(
                <div className="Button">
                    <Number numero={this.state.num}/>
                    <h2>You win!</h2>
                </div>
            )
        }
    }
}

export default Button;