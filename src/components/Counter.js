import React, {Component} from 'react'

class Counter extends Component{
  constructor(){
  	super()
  	this.state = {
  		count: 0
  	}
  }

  increment(incrementBy){
    this.setState(prevState => ({ count: prevState.count + incrementBy }))
  }

  render(){
  	return(
  		<div>
  			<div>Count : {this.state.count}</div>
  			<button onClick={()=>this.increment(1)}>increment count</button>
        <button onClick={()=>this.increment(5)}>increment 5</button>
  		</div>
  	)
  }
}

export default Counter
