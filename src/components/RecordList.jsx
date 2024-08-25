import React, { useContext } from "react";
import RecordListHeader from "./RecordListHeader";
import { RecordContext } from "../RecordsContext";

const RecordList = () => {
  const {
    setEditRecord,
    setToggleForm,
    toggleForm,
    deleteRecord,
    filteredRecords,
  } = useContext(RecordContext);

  function handleEdit(record) {
    setEditRecord(record);
    setToggleForm(true);
  }

  function handleDelete(id) {
    deleteRecord(id);
  }

  return (
    <>
      <div className="record-container w-full h-[60vh] border rounded-lg mt-3 overflow-y-auto">
        <RecordListHeader toggleForm={toggleForm} />
        <div className="mt-[65px] p-3">
          {filteredRecords.length === 0 ? (
            <div className="text-center text-gray-600 mt-4">
              <h1 className="font-semibold text-2xl">No transactions yet.</h1>
              <h1 className="font-semibold text-2xl mt-1">
                Add your Income and Expense to start tracking..
              </h1>
              <button
                onClick={() => {
                  setToggleForm(true);
                }}
                className="bg-purple-600 text-white font-semibold text-lg py-2 px-6 rounded-full mt-4"
              >
                Add Transaction
              </button>
            </div>
          ) : (
            <table className="table">
              <thead>
                <tr className="table-f-row">
                  <td className="max-sm:text-[13px]">Type</td>
                  <td className="max-sm:text-[13px]">Description</td>
                  <td className="hidden sm:block">Date</td>
                  <td className="max-sm:text-[13px]">Amount</td>
                  <td></td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.map((item) => (
                  <tr key={item.id} className="table-data">
                    <td>
                      <p
                        className={
                          item.type === "expense"
                            ? "text-orange-600 max-sm:text-[13px] sm:text-lg bg-orange-100 w-[fit-content] rounded-full py-1 px-3"
                            : "text-green-600 max-sm:text-[13px] sm:text-lg bg-green-100 w-[fit-content] rounded-full py-1 px-4"
                        }
                      >
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </p>
                    </td>
                    <td className="text-gray-800 sm:font-semibold max-sm:text-[13px]">
                      {item.description}
                    </td>
                    <td className="text-gray-800 sm:font-semibold max-sm:hidden">{item.date}</td>
                    <td className="text-gray-800 sm:font-semibold max-sm:text-[13px]">
                      ₹{item.amount.toFixed(2)}
                    </td>
                    <td>
                      <button className="" onClick={() => handleEdit(item)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          fill="currentColor"
                          className="text-green-400 edit-icon max-sm:w-4"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                          />
                        </svg>
                      </button>
                    </td>
                    <td>
                      <button
                        className=""
                        onClick={() => handleDelete(item.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          fill="currentColor"
                          className="text-red-400 delete-icon max-sm:w-4"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default RecordList;
