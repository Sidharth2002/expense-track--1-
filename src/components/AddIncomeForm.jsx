import { useState } from "react";
import axios from "axios";

const AddIncomeForm = () => {
  // State to manage input fields
  const [incomeData, setIncomeData] = useState({
    userIdJoin: 1, // Set userIdJoin to 1
    incomeCategory: "",
    incomeDescription: "",
    incomeAmount: "",
    incomeDate: "",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIncomeData({
      ...incomeData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the API
      await axios.post(
        "http://localhost:8080/income/addUserIncome",
        incomeData
      );

      // Clear the form after successful submission
      setIncomeData({
        userIdJoin: 1, // Set userIdJoin to 1
        incomeCategory: "",
        incomeDescription: "",
        incomeAmount: "",
        incomeDate: "",
      });

      // Optionally, you can display a success message or perform other actions
      console.log("Income added successfully!");
    } catch (error) {
      console.error("Error adding income:", error);
    }
  };

  return (
    <div>
      <h2>Add Income</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Income Category:</label>
          <input
            type="text"
            name="incomeCategory"
            value={incomeData.incomeCategory}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Income Description:</label>
          <input
            type="text"
            name="incomeDescription"
            value={incomeData.incomeDescription}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Income Amount:</label>
          <input
            type="number"
            name="incomeAmount"
            value={incomeData.incomeAmount}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Income Date:</label>
          <input
            type="date"
            name="incomeDate"
            value={incomeData.incomeDate}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default AddIncomeForm;
