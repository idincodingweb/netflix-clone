import React from 'react';
import '../styles/SearchOverlay.css';

function SearchOverlay({ searchTerm, onSearchChange, onSearchSubmit, onClose }) {
  return (
    <div className="searchOverlay">
      <div className="searchOverlay__content">
        <button className="searchOverlay__close" onClick={onClose}>X</button>
        <form className="searchOverlay__form" onSubmit={onSearchSubmit}>
          <input
            type="text"
            placeholder="Search…"
            value={searchTerm}
            onChange={onSearchChange}
            className="searchOverlay__input"
          />
          <button type="submit" className="searchOverlay__button">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchOverlay;
