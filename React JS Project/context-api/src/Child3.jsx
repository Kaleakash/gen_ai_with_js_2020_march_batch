import { useContext } from "react";
import MyContext from "./MyContext";

function Child3() {
let pName  = useContext(MyContext)
   return (
    <div>
      <h3>Child3</h3>
        <p>This is Child3 component </p>
        <p>Parent name from context: {pName}</p>  
    </div>
  );
}
export default Child3;