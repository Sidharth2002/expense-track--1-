import { useState, useEffect } from "react";
import axios from "axios";

const IncomeTable = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch income data from the API for the current page
    axios
      .get(
        `http://localhost:8080/income/userIncomeAsPage/1?page=${currentPage}&pageSize=5`
      )
      .then((response) => {
        setIncomeData(response.data.content);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching income data:", error);
        setLoading(false);
      });
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleEdit = (incomeId) => {
    // Implement edit functionality, e.g., navigate to an edit page with the incomeId
    console.log("Edit income with ID:", incomeId);
  };

  const handleDelete = (incomeId) => {
    // Implement delete functionality
    if (window.confirm("Are you sure you want to delete this income record?")) {
      axios
        .delete(`http://localhost:8080/income/delete/${incomeId}`)
        .then(() => {
          // Reload data after deletion or update the state to remove the deleted record
          // You can implement this logic as needed
          console.log("Income deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting income:", error);
        });
    }
  };

  return (
    <div>
      <h2>Income Table</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {incomeData.map((income, index) => (
                <tr key={index}>
                  <td>{income.incomeCategory}</td>
                  <td>{income.incomeDescription}</td>
                  <td>${income.incomeAmount.toFixed(2)}</td>
                  <td>{new Date(income.incomeDate).toLocaleDateString()}</td>
                  <td>
                    <button onClick={() => handleEdit(income.incomeId)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(income.incomeId)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IncomeTable;
