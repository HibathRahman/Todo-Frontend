import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="searchForm">
      <input
        type="text"
        role="searchbox"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Item "
      />
    </form>
  );
};

export default SearchItem;
