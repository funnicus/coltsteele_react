import React, {Component} from 'react';
import uuid from "uuid/v4";
import './NewBoxForm.css'

class NewBoxForm extends Component{
    constructor(props){
        super(props);
        this.state = {width: "", height: "", backgroundColor: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt){
        evt.preventDefault();
        const newBox = {...this.state, id: uuid()}
        this.props.addItem(newBox);
        let curState = {...this.state};
        curState = {width: "", height: "", backgroundColor: ""};
        this.setState(this.state = curState);
    }
    render() {
        return(
            <div className="NewBoxForm">
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type='text'
                    name="width"
                    value={this.state.width}
                    placeholder='width...'
                    onChange={this.handleChange}
                    />
                    <input 
                    type='text'
                    name="height"
                    value={this.state.height}
                    placeholder='height...'
                    onChange={this.handleChange}
                    />
                    <input 
                    type='text'
                    name="backgroundColor"
                    value={this.state.backgroundColor}
                    placeholder='background-color...'
                    onChange={this.handleChange}
                    />
                    <button>Submit!</button>
                </form>
            </div>
        );
    }
}

export default NewBoxForm;