import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList  = (props)=>{
    if(props.items.length===0)
    return <h2 className="expenses-list__fallback">No Expense Found!</h2>;
    return (
      <ul className="expenses-list">
        {props.items.map((exp) => (
          <ExpenseItem key={exp.id} expense={exp} />
        ))}
      </ul>
    );
};
export default ExpensesList;