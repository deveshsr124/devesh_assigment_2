import React from "react";
import "../Home/home.css";
const Search = () => {
  return (
    <div className="search-component">
      <i
        className="fa-solid fa-magnifying-glass"
        style={{ paddingLeft: "5px" }}
      ></i>
      <input
        type="text"
        placeholder="Search.."
        name="search"
        className="search-input"
      />
    </div>
  );
};

export default Search;
