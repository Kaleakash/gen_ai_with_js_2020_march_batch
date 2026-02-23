import Counter from "./Counter";
import Employee from "./Employee";

function Header() {

  return <div>This is header component</div>
}

function Footer() {
  
  return <div>This is footer component</div>
}

function App() {

  return(
    <div>
      {/* <Header />
      <h1>Welcome to React App</h1>
      <p>This app created by Akash Kale</p>
      <Counter></Counter> */}
      <Employee></Employee>
      {/* <Footer /> */}
    </div>
  )
}

export default App;