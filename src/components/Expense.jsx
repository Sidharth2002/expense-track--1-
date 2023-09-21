import "../styles/Expenses.css";
import ExpenseTable from "./ExpenseTable";
import AddExpenseForm from "./AddExpenseForm";

function Expenses() {
  return (
    <>
      <div className="placement">
        <div className="graph"></div>
        <div className="add-data">
          <AddExpenseForm />
        </div>
        <div className="data-table">
          <ExpenseTable />
        </div>
      </div>
    </>
  );
}

export default Expenses;
