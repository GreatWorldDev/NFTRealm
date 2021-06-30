import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
function Search() {
  return (
    <div class="search-box">
      <BsSearch class="searchicon" />
      <input type="text" placeholder="Search" />
      <span>Search</span>
    </div>
  );
}

export default Search;
