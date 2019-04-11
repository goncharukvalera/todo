import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
    const placeholder = 'Type here to search';
    return <input type="text" placeholder={placeholder} className="search-input" autoComplete="off"/>;
};

export default SearchPanel;
