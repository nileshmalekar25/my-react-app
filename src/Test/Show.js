import React from "react";

class Show extends React.Component{

constructor(){


    super();
    this.state={
        show:true
    }
}


render(){
    return(
        <div>

            {
                this.state.show ?
                <h1>hide and show</h1>
                :null
            }
         
<button onClick={()=>{this.setState({show:!this.state.show})}}>toggle  me</button>

        </div>
    )
}





}

export default Show;