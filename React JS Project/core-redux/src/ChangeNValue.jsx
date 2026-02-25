import { useDispatch } from "react-redux";

function ChangeNValue() {


let dispatch = useDispatch();   // get dispatch function from redux, to dispatch action to update state
    return(
        <div>
            <h2>Change N Value Component</h2>
            <input type="button"
            value="Increment n Value"
            onClick={()=>dispatch({ type: 'INCREMENT_N' })}/>
                <input type="button"
                value="Decrement n Value"
                onClick={()=>dispatch({ type: 'DECREMENT_N' })}/>
        </div>
    )
}

export default ChangeNValue