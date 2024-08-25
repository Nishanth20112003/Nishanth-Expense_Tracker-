// Sort.js
import React, { useContext, useRef, useState, useEffect } from "react";
import { RecordContext } from "../RecordsContext";

const Sort = () => {
  const { sortRecords } = useContext(RecordContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const sortModalRef = useRef();
  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }
  function handleSort(type) {
    sortRecords(type);
    toggleDropdown();
  }
  useEffect(() => {
    function handleClickOutside(e) {
      if (sortModalRef.current && !sortModalRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="sort relative">
      <button
        className=" flex items-center gap-2 border py-1 sm:py-2 rounded-lg px-1 sm:px-6 text-gray-400 text-sm sm:text-lg hover:border-purple-300 hover:shadow-md "
        onClick={toggleDropdown}
      >
        Sort
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className={`bi bi-chevron-down mt-1 transition-transform duration-300 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </span>
      </button>
      {dropdownOpen && (
        <div ref={sortModalRef} className="absolute bg-gray-100 border rounded-lg shadow-md mt-2 w-[120px] text-center">
          <button
            className="block w-full text-left px-4 py-2 text-lg text-gray-600 hover:bg-violet-500 hover:text-white"
            onClick={() => handleSort("date-desc")}
          >
            Descending
          </button>
          <button
            className="block w-[100%] text-left px-4 py-2 text-lg text-gray-600 hover:bg-violet-500 hover:text-white"
            onClick={() => handleSort("date-asc")}
          >
            Ascending
          </button>
        </div>
      )}
    </div>
  );
};

export default Sort;
