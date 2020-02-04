import React, {Component} from 'react';
import './Box.css'

class Box extends Component{
    render() {
        return(
            <div>
                <div
                className="Box"
                style={
                    {
                    width: this.props.width,
                    height: this.props.height,
                    backgroundColor: this.props.backgroundColor
                    }
                }
                />
                <button onClick={this.props.handleRemove}>Remove box</button>
            </div>
        );
    }
}

export default Box;