import React, {Component} from 'react';
import Box from './Box';
import './BoxGrid.css';

class BoxGrid extends Component {
    /*static defaultProps = {
        numBoxes: 18,
        colors: [
            'pink',
            'blue',
            'green',
            'yellow',
            'navy',
            'teal',
            'red',
            'purple',
            'violet',
            'gold'
        ]
    }*/
    rndColor () {
        return Math.floor(Math.random()*this.props.colors.length);
    }
    render() {
        console.log(this.props.colors.length);
        console.log(this.rndColor());
        const boxes = Array.from({length: this.props.numBoxes}).map(
            () => <Box colour={this.props.colors[this.rndColor()]} colors={this.props.colors}/>
            )
        return(
            <div className="BoxGrid">
                {boxes}
            </div>
        );
    }
}

export default BoxGrid;