import React ,{ useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const handleIncrease=()=>{
        setCount(count+1);
    }
    const handleDecrease=()=>{
        setCount(count-1);
    }
    const formatCount= () =>{
        return count===0 ? 'Zero': count
    }
    const bgClasses=()=>{
        let classes= ` m-1 span bg-${count===0 ? 'warning':'primary'}  `;
        return classes
    }
    
    return(
        <div>
            <span className={bgClasses()}>{formatCount()}</span>
            <button className="btn btn-primary m-1" onClick={handleIncrease}>Increment</button>
            <button className="btn btn-danger m-1" onClick={handleDecrease}>Decrement</button>
        </div>
    )
}

export default Counter