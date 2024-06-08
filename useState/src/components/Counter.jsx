import { useState } from "react"; // import useState


function Counter() {
// This is a simple counter that allows the user to increment and decrement the count value by 1(set value)
    const [count, setCount] = useState(0); // useState
return (
    <div>
        <button onClick={()=> setCount (count+1)}>Increment</button> 
        {/* increment count by set number */}
        <button onClick={()=> setCount (count-1)}>Decrement</button>
        {/* decrement count by set number */} 
        <p>{count}</p>
    </div>
)
};

export default Counter;