import Header from "./components/Header";
import ExpenseAndIncome from "./components/ExpenseAndIncome";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RecordList from "./components/RecordList";
import RecordForm from "./components/RecordForm";
import { useContext } from "react";
import { RecordContext } from "./RecordsContext";

function App() {
  const { toggleForm, setToggleForm } = useContext(RecordContext);
  return (
    <>
      {toggleForm ? (
        <div className="tint absolute top-0 right-0 left-0 bottom-0"></div>
      ) : (
        ""
      )}
      <div className="app-container">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="w-[100%] bg-white rounded-tl-lg px-5">
            {toggleForm ? (
              <div className="mt-3">
                <RecordForm />
              </div>
            ) : (
              ""
            )}
            <Header />
            <ExpenseAndIncome />
            <RecordList />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
