import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { error, searchTerm, setSearchTerm } = useGlobalContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {error.show && <div className="error">Error: {error.msg}</div>}
    </form>
  );
};

export default SearchForm;
