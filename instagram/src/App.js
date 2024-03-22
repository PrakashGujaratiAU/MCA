import Homepage from "./Homepage";
import React, {useState} from "react";

function App(props) {


  const [count, setCount] = useState(0);

  
  return (
    <>
      <Homepage />
      {/* <center>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      </center> */}
    </>
  );
}

export default App;
