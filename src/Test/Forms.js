import React,{useEffect,useState} from "react";


const Forms=()=>{

const [count,setCount]=useState(1)

useEffect(()=>{
    console.warn(count)
},[count==5])


return(
    <div>
        <h1>
            use effect hook...{count}
        </h1>

        <button onClick={()=>setCount(count+1)}>update</button>
    </div>
);
};
//this is b1 commit.

export default Forms;