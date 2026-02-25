import { useSelector } from 'react-redux'
import First from './First'
import ChangeNValue from './ChangeNValue';

function App() {
let nameValue = useSelector(gs=>gs.name);   // get name from global state
  return (
    <>
      <h2>React with Core Redux Concept</h2>
      <p>Name: {nameValue} </p>
      <First/>
      <ChangeNValue/>
    </>
  )
}

export default App
