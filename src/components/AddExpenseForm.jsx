import { useState } from "react";
import axios from "axios";

const AddExpenseForm = () => {
  // State to manage input fields
  const [expenseData, setExpenseData] = useState({
    userIdJoin: 1, // Set userIdJoin to 1
    expenseCategory: "",
    expenseDescription: "",
    expenseAmount: "",
    expenseDate: "",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({
      ...expenseData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the API
      await axios.post(
        "http://localhost:8080/expense/addUserExpense",
        expenseData
      );

      // Clear the form after successful submission
      setExpenseData({
        userIdJoin: 1, // Set userIdJoin to 1
        expenseCategory: "",
        expenseDescription: "",
        expenseAmount: "",
        expenseDate: "",
      });

      // Optionally, you can display a success message or perform other actions
      console.log("Expense added successfully!");
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Expense Category:</label>
          <input
            type="text"
            name="expenseCategory"
            value={expenseData.expenseCategory}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Expense Description:</label>
          <input
            type="text"
            name="expenseDescription"
            value={expenseData.expenseDescription}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Expense Amount:</label>
          <input
            type="number"
            name="expenseAmount"
            value={expenseData.expenseAmount}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Expense Date:</label>
          <input
            type="date"
            name="expenseDate"
            value={expenseData.expenseDate}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
