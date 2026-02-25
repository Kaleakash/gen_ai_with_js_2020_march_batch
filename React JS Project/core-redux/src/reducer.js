
let initialState = {
    n:100,               // n is the number of items in the list, default is 100
    name:"Akash Kale",
    products:[]
}

function reducer(state = initialState, action) {
    // base upon action type, update state
    console.log("Reducer called with action: ", action);
    if(action.type === 'INCREMENT_N') {
        return {
            ...state,   // copy existing state
            n: state.n + 1   // update n value by incrementing it by 1
        }
    }
    else if(action.type === 'DECREMENT_N') {
        return {
            ...state,   // copy existing state

            n: state.n - 1   // update n value by decrementing it by 1
        }
    }
    return state;
}

export default reducer;