import { useState } from "react";

function Counter(props) {
    var [counter, setCounter] = useState(props.startAt);
    //setTimeout(()=> setCounter(counter += props.countBy), 1000);

    function increase() {
        setCounter(counter + props.countBy)
    }

    function decrease() {
        setCounter(counter - props.countBy)
    }

    return (
       <>
            <p>Start at: {props.startAt}</p> 
            <p>Count by: {props.countBy}</p> 
            <h4>{counter}</h4>
            <button className="btn btn-primary" onClick={increase}>Increase</button>
            <button className="btn btn-danger" onClick={decrease}>Decrease</button>
       </>
    );
}

Counter.defaultProps = {
    startAt: 0,
    countBy: 1
}

export default Counter;