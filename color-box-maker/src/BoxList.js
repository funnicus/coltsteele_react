import React, {Component} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css'

class BoxList extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);
    }
    addItem(item){
        this.setState(state => ({
            items: [...state.items, item]
        }));
    }
    handleRemove(id){
        this.setState(state => ({
            items: this.state.items.filter(box => box.id !== id)
        }));
    }
    render() {
        const boxes = this.state.items.map(
            (items) => <Box 
                    key={items.id}
                    id={items.id}
                    width={items.width} 
                    height={items.height} 
                    backgroundColor={items.backgroundColor}
                    handleRemove={() => this.handleRemove(items.id)}
                    />
        )
        return(
            <div className="BoxList">
                <NewBoxForm addItem={this.addItem}/>
                {boxes}
            </div>
        );
    }
}

export default BoxList;