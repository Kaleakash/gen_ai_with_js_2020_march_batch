import { useState } from "react";
import Child1 from "./Child1";

function Parent() {
    let [parentName,setParentName] = useState("John Doe");  // state variable to hold the name of the parent

    return(
        <div>
            <h2>In Parent component </h2>
            <p>Parent name is {parentName}</p>
            <Child1 pName={parentName}></Child1>
        </div>
    )
}

export default Parent;