import { useState } from "react"; // import useState
import React from "react";

// This is a dynamic counter that allows the user to change the increment/decrement value, and the operation used in the counter¸
function DynamicCounter() {

  const [count, setCount] = useState(1); // useState sets initial count value to 0
  const [increment, setIncrement] = useState(1); // useState sets initial increment value to 1

  // const [operation, setOperation] = useState("+"); | useState sets initial operation to add (+) 
  // MISTAKE: set operator to string value using quotes to avoid errors -- does not change the operation as the application does not recognize strings as operators

  // Variables for the operation(s) based on the selected radio button
  const add = ()=> setCount(count + increment);
  const subtract = ()=> setCount(count - increment);
  const multiply = ()=> setCount(count * increment);
  const divide = ()=> setCount(count / increment);
  
  
  function changeOperation() {
    return document.getElementById("add") === true
      ? add
      : document.getElementById("subtract") === true
      ? subtract
      : document.getElementById("multiply") === true
      ? multiply
      : divide
  } // return operator based on selected radio button

  //MISTAKE: Cannot pass math operator as values to change numerical values through if statements | let property not being read and passed through an if-else chain == Make the operations a variable | Perpetual state of divide operation

  return (
    <div>
      <p>Counter</p>
      <button id="result" onClick={changeOperation()}>=</button>
      {/* increment count by set number */}
      <p>{count}</p>

      {/* MISTAKE: when updating the count in the buttons above, I used {} for the 'value' state which would then cause the app to add [object Object] at the end of count instead of changing the increment size  */}

      <p>Change increment size:</p>
      <button onClick={() => setIncrement(increment + 1)}>Increase</button>
      {/* increment value by set number */}
      <button onClick={() => setIncrement(increment - 1)}>Decrease</button>
      {/* decrement value by set number */}
      <p>{increment}</p>

      <p>Change Operation</p>
      <form action="">
        <input
          type="radio"
          id="add"
          value="Add"
          name="operation"
          defaultChecked
        />
        <label htmlFor="add">Add</label>
        <input type="radio" id="subtract" value="Subtract" name="operation" />
        <label htmlFor="subtract">Subtract</label>
        <input type="radio" id="multiply" value="Multiply" name="operation" />
        <label htmlFor="multiply">Multiply</label>
        <input type="radio" id="divide" value="Divide" name="operation" />
        <label htmlFor="divide">Divide</label>
      </form>
    </div>
  );
}

export default DynamicCounter;
