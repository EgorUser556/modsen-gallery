import './Toolbar.css';

import React from 'react';

interface ToolbarProps {
  query: string;
  onQueryChange: (value: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ query, onQueryChange }) => (
  <div className="toolbar">
    <form className="toolbar__search" onSubmit={(event) => event.preventDefault()}>
      <span aria-hidden="true" className="toolbar__search-icon" />

      <input
        className="toolbar__search-input"
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Food"
        value={query}
      />
    </form>
  </div>
);

export default Toolbar;
