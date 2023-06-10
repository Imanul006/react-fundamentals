//import { Button } from "bootstrap";
import Navbar from "./navbar";
import React from "react";
//import List from "./List";
import Counter from "./Counter";

function App() {
//   const [count, setCount] = useState(0);
//   const guitars = ['Strat', 'Les Paul', 'Shadow Caster'];
//   let stuff = List({title: 'Guitar', items: guitars});

  return (
    <>
      <Navbar title="Lots of Component" />
      <Counter startAt={0} countBy={2}/>
      {/* <div className="container">Hello World!!! + {count}</div>
      <div className="container"> */}
      {/* {stuff} */}
        {/* <List title='Guitar' items={guitars}/> */}
      {/* </div> */}
      {/* <button
        className="btn btn-dark"
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Update...
      </button> */}
    </>
  );
}

export default App;
