function Compare(){

const x=50;
let text="goodbye"


function clickhere(){
    if(x>5){
        text="hello"
    }
}
    return(


        <>
      
        <button onClick={{clickhere}}>click me</button>
        </>
    )
}

export default Compare;