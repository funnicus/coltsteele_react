import React, {Component} from 'react';
import './Coin.css';

class Coin extends Component {
    render() {
        return(
            <div className="Coin">
                {this.props.face === 0
                ? <img src="https://www.fleur-de-coin.com/images/currency/km-pending/km-33_2015b.jpg" alt="" />
                : <img src="http://www.romacoins.com/WebRoot/ce_it/Shops/990481405/5737/34E7/AD99/018C/25F3/C0A8/1911/3898/2_Euro_Commemorativi_Francia_2014_m.jpg" alt="" />
                }
            </div>
        );
    }
}

export default Coin;