import React, { useContext } from "react";
import { RecordContext } from "../RecordsContext";

const TotalExpenseAndIncome = () => {
  const { expenseCount, incomeCount } = useContext(RecordContext);
  return (
    <>
      <div className="income-expense flex gap-3 bg-gray-100 py-2 px-4 rounded-full">
        <div className="flex gap-2 items-center">
          <h1 className="font-semibold text-gray-400 text-sm sm:text-lg">Income</h1>
          <p className="bg-amber-200 rounded-full text-orange-600 px-2">
            {incomeCount}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <h1 className="font-semibold text-gray-400  text-sm sm:text-lg">Expense</h1>
          <p className="bg-blue-200 rounded-full text-blue-600 px-2">
            {expenseCount}
          </p>
        </div>
      </div>
    </>
  );
};

export default TotalExpenseAndIncome;
