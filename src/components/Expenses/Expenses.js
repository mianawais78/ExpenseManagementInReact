import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import './Expenses.css';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses (props){
  const [filteredYear,setFilteredYear]  = useState('2020');
  const filterChangeHandler = selectedYear=>{
    console.log(selectedYear)
    setFilteredYear(selectedYear);
  }
  const filterExpense = props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilter={filterChangeHandler} />
      <ExpensesChart expenses={filterExpense}></ExpensesChart>
      <ExpensesList items={filterExpense}></ExpensesList>    
      
    </Card>
  );

}
export default Expenses;