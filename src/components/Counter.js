import React, {Component} from 'react'

class Counter extends Component{
  constructor(){
  	super()
  	this.state = {
  		count: 0
  	}
  }

  incrementCount(){
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  incrementFive(){
 		this.setState(prevState => ({ count: prevState.count + 5 }))
  }

  render(){
  	return(
  		<div>
  			<div>Count : {this.state.count}</div>
  			<button onClick={()=>this.incrementCount()}>increment count</button>
        <button onClick={()=>this.incrementFive()}>increment 5</button>
  		</div>
  	)
  }
}

export default Counter
