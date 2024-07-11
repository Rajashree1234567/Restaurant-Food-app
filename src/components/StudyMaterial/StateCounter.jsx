import { useState } from "react"


export default function StateCounter() {
    const[counter, setCounter] = useState(0);
    const[incrementBy, setIncrementBy] = useState(0);
    const[limit, setLimit] = useState(5);

    function handleIncrement(){
        setCounter(counter+incrementBy);
    }
    const handleDecrement= () => {
        setCounter(counter-1);
    }
    function handleIncrementBy(){
        setIncrementBy(incrementBy+1);
    }

    // const handleButtonLimit =()=> {
    //     const displayLimit = "10";
    //     setLimit({
    //         if(displayLimit){
    //             return(limit+1);
    //         }else{
    //             return (limit-1);
    //         }
    //     })
    // }
    return(
        <>
            <h3>Counter is: {counter} </h3>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>

            <h3>We are Incrementing: {incrementBy}</h3>
            <button onClick={handleIncrementBy}>Incresing</button>

            <h3>button increse till 10, after decrese to 0 : {limit}</h3>
            <button onClick={handleButtonLimit}>Limit</button>
        </>
    )
}