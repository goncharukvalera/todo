import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {
    filters = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];
    render() {
        const {filter, onFilterChange} = this.props,
              filters = this.filters.map(({name, label}) => {
            const isActive = filter === name,
                cls = isActive ? 'btn-info' : 'btn-outline-secondary'; // добавляем зависимость активного класса от текущего фильтра
            return (
                <button type="button"
                        className={`btn ${cls}`}
                        key={name}
                        onClick={() => onFilterChange(name)}>
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
