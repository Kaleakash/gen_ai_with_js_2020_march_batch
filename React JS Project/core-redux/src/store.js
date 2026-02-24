import { legacy_createStore as createStore} from 'redux'
import reducer from './reducer'

// create store, and export it for use in the app
// while creating store we need to connect to reducer, 
// which is the function that will update the state based on the action
let storeRef = createStore(reducer);

export default storeRef;