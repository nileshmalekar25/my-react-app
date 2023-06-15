import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Alert, Button } from "bootstrap";
//import { useState } from "react";
// import AppHeader from './Test/AppHeader';
// import AppBody from './Test/AppBody';
// import AppFooter from './Test/AppFooter';

//import Profile from "./Test/Profile";
//import Show from "./Test/Show";
//import Updatastate from './Test/Updatestate'
//import Alertapp from "./Test/Alertapp";

//import Count from "./Test/Count";

//import Compare from "./Test/Compare";

import Forms from "./Test/Forms";
function App() {
  return (
    <>

<div>
      {/* <div><AppHeader/>
<AppBody/>
<AppFooter/></div> */}

    
        {/* <CounterApp />
        <counterdecrase /> */}
{/* <Profile text="hello nilesh malekar" data={{name:"nilesh",city:"kharghar"}}/>
<h1>hello</h1> */}
{/* <Updatastate/> */}

{/* <Show/> */}

{/* <Alertapp/> */}

{/* <Count/> */}
{/* <Compare/> */}

<Forms/>


      </div>
    </>
  );
}

// function CounterApp() {
//   let [counter, setCounter] = useState(1);

//   let likemeAction = () => {
//     counter = counter + 1;
//     console.log("i am button click", counter);

//     setCounter(counter);
//   };

//   return (
//     <>
//       <h1>{counter}</h1>
//       <input type="button" value="like me" onClick={likemeAction} />
//     </>
//   );
// }

// function counterdecrase(){
//   let[counter,setCounter]=useState(1);

//   let likemeAction=()=>{
// counter =counter-1;
// console.log(
//   "i am button click",counter
// );

// setCounter(counter);
//   };

//   return(
//     <>

// <h1>{counter}</h1>
// <input type="button" value ="dislike me" onClick={counterdecrase}/>

//     </>
//   );
// }

export default App;
