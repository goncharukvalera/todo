import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    constructor(){
        super();
        this.state = {label: ''};
    }
    onItemChange = (e) => {
        // console.log(e.target.value);
        this.setState({label: e.target.value});
    };
    render() {
        return <form className="item-add-form">
            <input  type="text"
                    className="new-item-name form-control"
                    onChange={this.onItemChange}
                    placeholder="What needs to be done"
            />
            <button
                      className="add-item btn btn-outline-secondary"
                      onClick={() => this.props.onItemAdded('New Item')}>
                Add Item
            </button>
        </form>
    }
}