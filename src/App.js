import { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const dummyExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(() => {
    // Load expenses data from LocalStorage
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      return JSON.parse(storedExpenses).map((expense) => ({
        ...expense,
        date: new Date(expense.date),
      }));
    } else {
      return dummyExpenses;
    }
  });

  useEffect(() => {
    // Save expenses data to LocalStorage whenever it changes
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const onAddingNewExpenseHandler = (newExpense) => {
    setExpenses((preExpenses) => {
      return [newExpense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onAddingNewExpense={onAddingNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
