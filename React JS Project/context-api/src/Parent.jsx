import { useState } from "react";
import Child1 from "./Child1";
import MyContext from "./MyContext";

function Parent() {
    let [parentName,setParentName] = useState("John Doe");  // state variable to hold the name of the parent

    return(
        <MyContext.Provider value={parentName}>
            <div>
                <h2>In Parent component </h2>
                <p>Parent name is {parentName}</p>
                <Child1></Child1>
            </div>
        </MyContext.Provider>
    )
}

export default Parent;