import { useState } from "react";

function Counter() {
let n=100;      // normal variable, not state variable
let [count,setCount]=useState(100);   // state variable, useState is a hook which returns an array of two elements, first element is the current state value and second element is a function to update the state value
let increment = ()=> {
    console.log("Value of n local variable "+n)
    console.log("Value of count state variable "+count)
    // n++;
    // count++;
    setCount(count+1);   // to update the state variable, we need to use the function returned by useState hook
    console.log("Value of n local variable after increment "+n)
    console.log("Value of count state variable after increment "+count)
}

    return(
        <div>
            <h2>Simple Counter Component</h2>
            <p>State variable : {count}</p>
            <p>Local variable : {n}</p>
            <input type="button" value="Increment Counter" onClick={increment} />
            <input type="button" value="Increment Local Variable" onClick={increment} />
        </div>
    )
}

export default Counter;