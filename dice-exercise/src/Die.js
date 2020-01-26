import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import './Die.css'

class Die extends Component {
    render() {

        const dice1 = <FontAwesomeIcon icon={faDiceOne} className={this.props.rolling ? 'shaking' : ''} />
        const dice2 = <FontAwesomeIcon icon={faDiceTwo} className={this.props.rolling ? 'shaking' : ''} />
        const dice3 = <FontAwesomeIcon icon={faDiceThree} className={this.props.rolling ? 'shaking' : ''} />
        const dice4 = <FontAwesomeIcon icon={faDiceFour} className={this.props.rolling ? 'shaking' : ''} />
        const dice5 = <FontAwesomeIcon icon={faDiceFive} className={this.props.rolling ? 'shaking' : ''} />
        const dice6 = <FontAwesomeIcon icon={faDiceSix} className={this.props.rolling ? 'shaking' : ''} />

        let dice = [
            dice1,
            dice2,
            dice3,
            dice4,
            dice5,
            dice6
        ]

        console.log("Value of the two dice")
        console.log(this.props.dice)

        return(
            <div className="Die">
                {dice[this.props.dice-1]}
            </div>
        )
    }
}

export default Die;