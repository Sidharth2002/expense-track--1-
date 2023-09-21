import { useState } from "react";
import "../styles/HomePage.css";
import ListGroup from "react-bootstrap/ListGroup";
import Dashboard from "../components/Dashboard";
import Incomes from "../components/Income";
import Expenses from "../components/Expense";

function Home() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Incomes":
        return <Incomes />;
      case "Expenses":
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="background">
      <div className="side-div">
        <div className="profile"></div>
        <div className="side-content">
          <div>
            <ListGroup>
              <ListGroup.Item
                active={activeTab === "Dashboard"}
                onClick={() => handleTabClick("Dashboard")}
              >
                Dashboard
              </ListGroup.Item>
              <ListGroup.Item
                active={activeTab === "Incomes"}
                onClick={() => handleTabClick("Incomes")}
              >
                Incomes
              </ListGroup.Item>
              <ListGroup.Item
                active={activeTab === "Expenses"}
                onClick={() => handleTabClick("Expenses")}
              >
                Expenses
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
      <div className="main-div">{renderContent()}</div>
    </div>
  );
}

export default Home;
