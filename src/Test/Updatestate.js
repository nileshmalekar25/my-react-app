import React from "react";


class Updatestate extends React.Component{


constructor(){
    super();
    this.state={
        name:"amit",
        email:"nilesh@gmail.com",
        count:0
    }
}

update(){
    this.setState({
        name:'karan',
        email:'nil25@rediffmail.com',
        count:this.state.count+1
    })
}
    render()
    {
      return(
        <div>
            <h1>hello{this.state.name}</h1>
            <h1>hello{this.state.email}</h1>
            <h1>hello{this.state.count}</h1>
            <button onClick={()=>{this.update()}}>Update name</button>
        </div>
      )  
    }
}


export default Updatestate;