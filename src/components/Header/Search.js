import React from "react";
import { BsSearch } from "react-icons/bs";
function Search() {
  return (
    <div className="search-box">
      <BsSearch className="searchicon" />
      <input type="text" placeholder="Search" />
      {/* <span>Search</span> */}
    </div>
  );
}

export default Search;
