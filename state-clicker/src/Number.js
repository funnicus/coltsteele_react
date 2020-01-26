import React, {Component} from 'react';

class Number extends Component {
    render() {
        return(
            <div className="Number">
                <h1>Number is: {this.props.numero}</h1>
            </div>
        )
    }
}

export default Number;