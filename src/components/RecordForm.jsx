import React, { useContext, useEffect, useState } from "react";
import { RecordContext } from "../RecordsContext";

const RecordForm = () => {
  const {
    setToggleForm,
    addRecord,
    editRecord,
    setEditRecord,
    updateRecord,
    toggleForm,
  } = useContext(RecordContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("income");

  useEffect(() => {
    if (editRecord) {
      setType(editRecord.type);
      setDate(editRecord.date);
      setDescription(editRecord.description);
      setAmount(editRecord.amount);
    } else {
      setType("income");
      setDescription("");
      setAmount("");
      setDate("");
    }
  }, [editRecord]);

  useEffect(() => {
    if (!toggleForm) {
      setType("income");
      setDescription("");
      setAmount("");
      setDate("");
      setEditRecord(null);
    }
  }, [toggleForm, setEditRecord]);

  function handleSubmit(e) {
    e.preventDefault();
    const newRecord = {
      id: editRecord ? editRecord.id : Date.now(),
      description,
      amount: parseFloat(amount),
      type,
      date: new Date(date).toISOString().slice(0, 10),
    };

    if (editRecord) {
      updateRecord(newRecord);
    } else {
      addRecord(newRecord);
    }

    setType("income");
    setDescription("");
    setAmount("");
    setDate("");
    setToggleForm(false);
    setEditRecord(null);
  }

  return (
    <div className="p-6 mx-auto w-[90%] sm:w-[40%] bg-white shadow-lg rounded-lg absolute top-[10%] left-[50%] transform translate-x-[-50%] z-20">
      <div
        className="close-icon cursor-pointer"
        onClick={() => {
          setToggleForm(false);
          setEditRecord(null);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="black"
          className="absolute top-5 right-5"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </div>
      <h2 className="text-2xl font-semibold mb-4 text-center text-purple-600">
        {editRecord ? "Update Record" : "Add New Record"}
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            type="text"
            placeholder="Enter Description"
            className="border border-gray-300 py-2 px-4 w-full text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label
            htmlFor="amount"
            className="block text-lg font-medium text-gray-700 mb-1"
          >
            Amount
          </label>
          <input
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            type="text"
            placeholder="Enter Amount"
            className="border border-gray-300 py-2 px-4 w-full text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-lg font-medium text-gray-700 mb-1"
          >
            Date
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="border border-gray-300 py-2 px-4 w-full text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex items-center gap-3 mt-4">
          <div className="flex-1">
            <label
              htmlFor="type"
              className="block text-lg font-medium text-gray-700 mb-1"
            >
              Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              id="type"
              className="py-2 px-4 w-full text-lg rounded-md border border-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <button
            type="submit"
            className="py-2 px-6 mt-[30px] bg-purple-600 text-white text-lg rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {editRecord ? "Update Record" : "Add Record"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecordForm;
