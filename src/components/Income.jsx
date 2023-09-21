import "../styles/Incomes.css";
import IncomeTable from "./IncomeTable";
import AddIncomeForm from "./AddIncomeForm";

function Incomes() {
  return (
    <>
      <div className="placement">
        <div className="graph"></div>
        <div className="add-data">
          <AddIncomeForm />
        </div>
        <div className="data-table">
          <IncomeTable />
        </div>
      </div>
    </>
  );
}

export default Incomes;
