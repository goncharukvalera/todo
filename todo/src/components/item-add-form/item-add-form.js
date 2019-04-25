import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    constructor(){
        super();
        this.state = {label: ''};
    }
    onItemChange = e => {
        // console.log(e.target.value);
        this.setState({label: e.target.value});
    };
    onSubmit = e => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
    };
    render() {
        return <form className="item-add-form"
                     onSubmit={this.onSubmit}>
            <input  type="text"
                    className="new-item-name form-control"
                    onChange={this.onItemChange}
                    placeholder="What needs to be done"
            />
            <button className="add-item btn btn-outline-secondary">
                Add Item
            </button>
        </form>
    }
}