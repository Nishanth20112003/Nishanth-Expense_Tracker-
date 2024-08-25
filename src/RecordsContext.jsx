import { createContext, useState } from "react";

export const RecordContext = createContext();

export const RecordProvider = ({ children }) => {
  const [toggleForm, setToggleForm] = useState(false);
  const [form, setForm] = useState(false);
  const [tint, setTint] = useState(true);
  const [records, setRecords] = useState([]);
  const [editRecord, setEditRecord] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");


  function addRecord(newRecord) {
    setRecords([...records, newRecord]);
  }
  function updateRecord(updatedRecord) {
    setRecords(
      records.map((record) =>
        record.id === updatedRecord.id ? updatedRecord : record
      )
    );
  }
  function deleteRecord(id) {
    setRecords(records.filter((record) => record.id !== id));
  }
  const filteredRecords = records.filter((record) => {
    const matchesSearch = record.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || record.type === filterType;
    return matchesType && matchesSearch;
  });
  const sortRecords = (type) => {
    const sortedRecords = [...records].sort((a, b) => {
      if (type === "date-desc") {
        return new Date(b.date) - new Date(a.date);
      } else if (type === "date-asc") {
        return new Date(a.date) - new Date(b.date);
      }
      return 0;
    });
    setRecords(sortedRecords);
  };
  const totalExpense = records.reduce(
    (total, record) =>
      record.type === "expense" ? total + record.amount : total,
    0
  );
  const totalIncome = records.reduce(
    (total, record) =>
      record.type === "income" ? total + record.amount : total,
    0
  );
  const expenseCount = records.filter(
    (record) => record.type === "expense"
  ).length;
  const incomeCount = records.filter(
    (record) => record.type === "income"
  ).length;

  return (
    <RecordContext.Provider
      value={{
        toggleForm,
        setToggleForm,
        records,
        editRecord,
        setEditRecord,
        addRecord,
        updateRecord,
        deleteRecord,
        filteredRecords,
        searchTerm,
        setSearchTerm,
        filterType,
        setFilterType,
        sortRecords,
        totalExpense,
        totalIncome,
        expenseCount,
        incomeCount,
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};
