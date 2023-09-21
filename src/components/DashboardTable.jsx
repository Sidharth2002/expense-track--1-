/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

const DashboardTable = ({ userId }) => {
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    fetchDashboardData(userId);
  }, [userId]);

  // eslint-disable-next-line no-unused-vars
  const fetchDashboardData = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/dashboard/lastFive/1`
      );
      setDashboardData(response.data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {dashboardData.map((record, index) => (
            <tr key={index}>
              <td>{record.transactionCategory}</td>
              <td>{record.transactionDescription}</td>
              <td>{record.transactionAmount}</td>
              <td>{record.transactionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
