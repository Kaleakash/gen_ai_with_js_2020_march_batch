import Child2 from "./Child2";

function Child1(props) {
   return (
    <div>
      <h3>Child1</h3>
       
        <Child2 pName={props.pName}></Child2>
    </div>
  );
}
export default Child1;