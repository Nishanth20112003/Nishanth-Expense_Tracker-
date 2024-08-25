import React, { useContext } from "react";
import { RecordContext } from "../RecordsContext";

const Sidebar = () => {
  const { setToggleForm } = useContext(RecordContext);
  return (
    <>
      <div className="sidebar px-[40px] py-5 bg-purple-50 w-[130px] h-[89vh] hidden sm:block">
        <h1 className="text-gray-400 font-semibold text-lg w-[fit-content] m-auto">
          Menu
        </h1>
        <div className="flex flex-col items-center mt-3">
          <div
            onClick={() => {
              setToggleForm(true);
            }}
            className="bg-purple-600 hover:bg-purple-700 p-1 cursor-pointer w-[fit-content] rounded-full mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="white"
              class="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-bank mt-5 text-gray-300"
            viewBox="0 0 16 16"
          >
            <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-person-circle mt-5 cursor-pointer text-gray-300"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
