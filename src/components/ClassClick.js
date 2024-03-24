import React, {Component} from 'react'

class ClassClick extends Component{
  constructor(){
    super()
  }

  clickHandler(){
    console.log("Clicked from Class")
  }

  render(){
    return(
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
