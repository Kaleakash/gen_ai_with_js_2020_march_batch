import {useState } from "react"
import { useSelector } from "react-redux";

function First() {
let [name,setName]=useState("John Doe");
let nValue = useSelector(gs=>gs.n);   // get n from global state
    return(
        <div>
            <h2>First Component</h2>
            <p>Name: {name} </p>
            <p>nValue: {nValue} </p>
        </div>
    )
}

export default First