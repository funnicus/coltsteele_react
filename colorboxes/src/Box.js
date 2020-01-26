import React, {Component} from 'react';
import './Box.css';

class Box extends Component {
    constructor(props){
        super(props);
        this.state = {color: this.props.colour};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        let curState = {...this.state};
        let newColor = Math.floor(Math.random()*this.props.colors.length)
        curState.color=this.props.colors[newColor];
        this.setState({
            color: curState.color//ei näin: this.props.colors[newColor]!!
        })
        console.log("Changing state...");
        console.log(curState);
    }
    render() {
        return(
            <div
            className="Box"
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}
            />
        );
    }
}

export default Box;