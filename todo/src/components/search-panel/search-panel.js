import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    constructor() {
        super();
        this.state = {
            term: ''
        };
    }

    searchChange = e => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {
        const placeholder = 'Type here to search';
        return <input type="text"
                      placeholder={placeholder}
                      className="search-input form-control"
                      autoComplete="off"
                      value={this.state.term}
                      onChange={this.searchChange}/>;
    }
}
