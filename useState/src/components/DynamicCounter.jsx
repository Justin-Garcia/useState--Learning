import { useState } from "react"; // import useState

function DynamicCounter() {
  // This is a dynamic counter that allows the user to change the increment/decrement value, and the operation used in the counter¸

  const [count, setCount] = useState(0); // useState sets initial count value to 0
  const [increment, setIncrement] = useState(1); // useState sets initial increment value to 1
  const [operation, setOperation] = useState("+"); // **EXPERIMENTAL PURPOSES** useState sets initial operation value to 

  return (
    <div>
      <p>Counter</p>
      <button onClick={() => setCount(count + increment)}>Increment</button>
      {/* increment count by set number */}
      <button onClick={() => setCount(count - increment)}>Decrement</button>
      {/* decrement count by set number */}
      <p>{count}</p>

      {/* MISTAKES: when updating the count in the buttons above, I used {} for the 'value' state which would then cause the app to add [object Object] at the end of count instead of changing the increment size  */}
      <p>Change increment size:</p>
      <button onClick={() => setIncrement(increment + 1)}>Increase</button>
      {/* increment value by set number */}
      <button onClick={() => setIncrement(increment - 1)}>Decrease</button>
      {/* decrement value by set number */}
      <p>{increment}</p>

      <p>Change operation:</p>

    </div>
  );
}

export default DynamicCounter;
