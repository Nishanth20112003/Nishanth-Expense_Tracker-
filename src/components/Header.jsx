import React, { useContext, useState } from "react";
import { RecordContext } from "../RecordsContext";

const Header = () => {
  const { setToggleForm } = useContext(RecordContext);
  return (
    <>
      <div className="header flex gap-1 items-center justify-between mt-2">
        <h1 className="font-semibold text-lg sm:text-2xl">Financial Overview</h1>
        <button
          onClick={() => {
            setToggleForm(true);
          }}
          className="w-[fit-content] px-2 sm:px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm sm:text-lg rounded-full"
        >
          Add Transaction
        </button>
      </div>
    </>
  );
};

export default Header;
