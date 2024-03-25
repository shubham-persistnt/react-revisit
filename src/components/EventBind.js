import React, {Component} from 'react'

class EventBind extends Component{

  constructor(){
    super()
    this.state = {
      message: 'Hello Shubham!'
    }
    this.eventHandler = this.eventHandler.bind(this)
  }

  eventHandler(){
    this.setState(
      {
        message: 'GoodBye!!'
      }
    )
  }

  render(){
    return(
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.eventHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
