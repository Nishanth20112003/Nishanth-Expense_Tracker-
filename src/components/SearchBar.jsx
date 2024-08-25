import React, { useContext, useRef } from "react";
import { RecordContext } from "../RecordsContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, searchFocus } = useContext(RecordContext);
  return (
    <>
      <div className="searchbar hidden sm:flex gap-3 items-center w-[300px] rounded-full py-2 px-3 bg-gray-50 border border-purple-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="gray"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
        <input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          type="text"
          placeholder="Search by Keywords.."
          className="text-lg outline-none bg-transparent w-[100%]"
        />
      </div>
    </>
  );
};

export default SearchBar;
