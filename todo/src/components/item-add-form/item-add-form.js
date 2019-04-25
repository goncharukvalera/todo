import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    render() {
        return <button
                  className="add-item btn btn-outline-secondary"
                  onClick={() => this.props.onItemAdded('New Item')}>
            Add Item
        </button>
    }
}