import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {
    filters = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];
    render() {
        const filters = this.filters.map(({name, label}) => {
            return (
                <button type="button"
                        className="btn btn-info"
                        key={name}>
                    {label}
                </button>
            )
        })
        return (
            <div className="btn-group">
                {filters}
            </div>
        );
    }
}
