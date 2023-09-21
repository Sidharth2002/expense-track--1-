import "../styles/Dashboard.css";
import DashboardTable from "./DashboardTable";

function Dashboard() {
  return (
    <>
      <div className="placement">
        <div className="table">
          <DashboardTable />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
