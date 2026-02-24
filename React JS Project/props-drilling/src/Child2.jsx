import Child3 from "./Child3";

function Child2(props) {
   return (
    <div>
      <h3>Child2</h3>
        
        <Child3 pName={props.pName}></Child3>
    </div>
  );
}
export default Child2;