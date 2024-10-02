import React from 'react';
import { useState, useEffect } from 'react';
const Header = ({ handlerSearchAction }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    handlerSearchAction(query);
  }, [query]);

  const handlerSearch = (e) => {
    setQuery(e.target.value);
    e.preventDefault();
  };
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <form action="" className="note-search">
        <input onChange={handlerSearch} value={query} type="text" placeholder="cari catatan..." />
      </form>
    </header>
  );
};

export default Header;
