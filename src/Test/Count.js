import { useState } from "react";



function Count(){
const[Count,setCount]=useState(0)

    return(
        <>
        <h>count is {Count}</h>
        
        <button onClick={()=>{setCount(Count+1)}}>increament</button>
        </>
    )
}

export default Count;

//this is second commit