import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'; 

const ExpenseItem = (props) => {

  // useState always returns an array with two elements.
  // First array value - is a pointer to the managed value.
  // Second array value - is the updating function to call and set a new value to the managed value.
  // - Use javascript array destructuring to store elements in separate variables. ex:
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle( "Updated" ); // if you need to update title use the setTitle function.
    console.log(title); // notice: this title will log 'old' title value because useState does not update the value right away. 
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={ clickHandler }>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
