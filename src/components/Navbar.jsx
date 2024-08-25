import React, { useContext } from "react";
import profile from "../assets/profile2.jpg";
import { RecordContext } from "../RecordsContext";

const Navbar = () => {
  const { toggleForm, setToggleForm, searchTerm, setSearchTerm } =
    useContext(RecordContext);
  return (
    <>
      <div className="navbar w-[100%] py-4 px-2 sm:px-[40px] flex gap-1 items-center justify-between bg-purple-50">
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="gray"
            class="bi bi-cash-coin"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
            />
            <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
            <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
            <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
          </svg>
          <h1 className="text-xl sm:text-3xl font-semibold">TractIt</h1>
        </div>

        <div className="flex gap-[15px] items-center">
          <div className="search-bar sm:hidden">
            <input
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              type="text"
              placeholder="Search with Keywords."
              className="p-2 text-sm sm:text-lg border rounded-full outline-none bg-gray-200"
            />
          </div>
          <div
            className="bg-purple-600 p-1 cursor-pointer rounded-full hover:bg-purple-700"
            onClick={() => {
              setToggleForm(!toggleForm);
            }}
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

          <div className="notification-section relative hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
            </svg>
            <div className="dot w-[8px] h-[8px] bg-red-500 rounded-full absolute top-0 right-0"></div>
          </div>
          <img
            src={profile}
            className="w-[40px] h-[40px] rounded-full cursor-pointer object-contain hidden sm:block"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
