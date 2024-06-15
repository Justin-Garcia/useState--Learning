import { useState } from "react"; // import useState

function DynamicCounter() {
  // This is a dynamic counter that allows the user to change the increment/decrement value, and the operation used in the counter¸

  const [count, setCount] = useState(0); // useState sets initial count value to 0
  const [increment, setIncrement] = useState(1); // useState sets initial increment value to 1
  // const [operation, setOperation] = useState("+"); | useState sets initial operation to add (+) MISTAKE: set operator to string value using quotes to avoid errors -- does not change the operation as the application does not recognize strings as operators

  function operator() {
    return (document.getElementById('add') == true) ? setCount(count + increment) 
    : (document.getElementById('subtract') == true) ? setCount(count - increment) 
    : (document.getElementById('multiply') == true) ? setCount(count * increment) 
    : setCount(count / increment) // return operator based on selected radio button
}
//MISTAKE: Cannot pass math operator as values to change numerical values through if statements


  return (
    <div>
      <p>Counter</p>
      <button onClick={() => setCount(count + increment)}>Increment</button>
      {/* increment count by set number */}
      <button onClick={() => setCount(count - increment)}>Decrement</button>
      {/* decrement count by set number */}
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
        <input type="radio" id="add" value="Add" name="operation" defaultChecked />
        <label htmlFor="add">Add</label>
        <input type="radio" id="subtract" value="Subtract" name="operation"/>
        <label htmlFor="add">Subtract</label>
        <input type="radio" id="multiply" value="Multiply" name="operation"/>
        <label htmlFor="add">Multiply</label>
        <input type="radio" id="divide" value="Divide" name="operation"/>
        <label htmlFor="add">Divide</label>
      </form>
    </div>
  );
}

export default DynamicCounter;
