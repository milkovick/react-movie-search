import React, { useState } from "react";
import "./style.css";

const Search = ({ onSubmit }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleReset = () => {
    setSearchInput("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSubmit(searchInput);
    handleReset();
  };

  return (
    <form id="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        value={searchInput}
        placeholder="Search movie"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit" value="Search" onClick={handleSearch}>
        Search
      </button>
    </form>
  );
};

export default Search;
