import React from "react";
import '../App.css';

const SearchComponent = ({ onChange, value }) => {
  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Search..."
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default SearchComponent;
