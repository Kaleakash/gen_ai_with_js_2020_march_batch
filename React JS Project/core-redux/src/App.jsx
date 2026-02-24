import { useSelector } from 'react-redux'
import First from './First'

function App() {
let nameValue = useSelector(gs=>gs.name);   // get name from global state
  return (
    <>
      <h2>React with Core Redux Concept</h2>
      <p>Name: {nameValue} </p>
      <First/>
    </>
  )
}

export default App
